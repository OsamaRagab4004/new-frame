import os
import re
import json
import urllib.request
import urllib.parse
import time
import sys
from html.parser import HTMLParser
from urllib.parse import urljoin, urlparse, parse_qs

# Set console encoding to UTF-8 to prevent charmap encoding errors on Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

# List of all crawled German URLs
TARGET_URLS = [
    "https://new-frame.de/deutsch/",
    "https://new-frame.de/deutsch/agbs.html",
    "https://new-frame.de/deutsch/aktuelles.html",
    "https://new-frame.de/deutsch/aktuelles/2015.html?view=archive&month=8",
    "https://new-frame.de/deutsch/aktuelles/2015.html?view=archive&month=9",
    "https://new-frame.de/deutsch/aktuelles/2017.html?view=archive&month=4",
    "https://new-frame.de/deutsch/aktuelles/2017.html?view=archive&month=5",
    "https://new-frame.de/deutsch/aktuelles/2019.html?view=archive&month=9",
    "https://new-frame.de/deutsch/aktuelles/42-spitzenleistungen-mit-spitzensportlern.html",
    "https://new-frame.de/deutsch/aktuelles/46-new-frame-im-land-des-laechelns.html",
    "https://new-frame.de/deutsch/aktuelles/47-kickoff-veranstaltung-spitzenleistungen-mit-spitzensportlern.html",
    "https://new-frame.de/deutsch/aktuelles/55-vortrag-sport-und-karriere-inspiration-auf-dem-weg-zum-erfolg.html",
    "https://new-frame.de/deutsch/aktuelles/57-ttt-trauma-tapping-technique.html",
    "https://new-frame.de/deutsch/aktuelles/63-lust-auf-erfolg-workshops-mit-markus-rehm.html",
    "https://new-frame.de/deutsch/aktuelles/66-seminarreise-auszeit-mit-gipfelstuermen-teneriffa-2020.html",
    "https://new-frame.de/deutsch/aktuelles/69-unsicherheitsmanagement.html",
    "https://new-frame.de/deutsch/aktuelles/71-resilienz-test-personal-resilience-indicator-pri.html",
    "https://new-frame.de/deutsch/coaching.html",
    "https://new-frame.de/deutsch/component/content/?id=59&Itemid=125",
    "https://new-frame.de/deutsch/component/content/?id=7&Itemid=113",
    "https://new-frame.de/deutsch/consulting.html",
    "https://new-frame.de/deutsch/datenschutz.html",
    "https://new-frame.de/deutsch/impressum.html",
    "https://new-frame.de/deutsch/kontakt.html",
    "https://new-frame.de/deutsch/netzwerk.html",
    "https://new-frame.de/deutsch/team.html"
]

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PAGES_DIR = os.path.join(BASE_DIR, "pages")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")
IMAGES_DIR = os.path.join(ASSETS_DIR, "images")
DOCS_DIR = os.path.join(ASSETS_DIR, "documents")
VIDEOS_DIR = os.path.join(ASSETS_DIR, "videos")

# Setup directories
for d in [PAGES_DIR, ASSETS_DIR, IMAGES_DIR, DOCS_DIR, VIDEOS_DIR]:
    os.makedirs(d, exist_ok=True)

# Tracking downloaded assets to avoid redundancy
downloaded_assets = {} # url -> local_path

class Element:
    def __init__(self, tag, attrs):
        self.tag = tag.lower()
        self.attrs = dict(attrs)
        self.children = []
        self.text = ""

    def get_attr(self, name):
        return self.attrs.get(name, '')

class DOMBuilder(HTMLParser):
    def __init__(self):
        super().__init__()
        self.root = Element("root", {})
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        elem = Element(tag, attrs)
        self.stack[-1].children.append(elem)
        # Self-closing tags in HTML
        if tag not in ['br', 'hr', 'img', 'input', 'link', 'meta', 'base', 'source', 'col', 'embed', 'param']:
            self.stack.append(elem)

    def handle_endtag(self, tag):
        tag = tag.lower()
        if tag not in ['br', 'hr', 'img', 'input', 'link', 'meta', 'base', 'source', 'col', 'embed', 'param']:
            # Mismatched tags handling: find tag in stack
            for i in range(len(self.stack) - 1, 0, -1):
                if self.stack[i].tag == tag:
                    while len(self.stack) > i:
                        self.stack.pop()
                    break

    def handle_data(self, data):
        if data.strip():
            self.stack[-1].text += data

def find_elements(elem, tag=None, id_val=None, class_val=None):
    results = []
    match = True
    if tag and elem.tag != tag.lower():
        match = False
    if id_val and elem.attrs.get('id') != id_val:
        match = False
    if class_val:
        elem_classes = elem.attrs.get('class', '').split()
        if class_val not in elem_classes:
            match = False
            
    if match and elem.tag != 'root':
        results.append(elem)
        
    for child in elem.children:
        results.extend(find_elements(child, tag, id_val, class_val))
        
    return results

def render_to_markdown(elem, base_url, page_assets):
    tag = elem.tag
    if tag in ['script', 'style', 'head', 'noscript', 'iframe']:
        return ""
        
    attrs = elem.attrs
    
    # Handle headings
    if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
        level = int(tag[1])
        inner = "".join(render_to_markdown(c, base_url, page_assets) for c in elem.children).strip()
        if not inner:
            inner = elem.text.strip()
        if inner:
            return f"\n\n{'#' * level} {inner}\n\n"
        return ""
        
    # Handle paragraph
    elif tag == 'p':
        inner = "".join(render_to_markdown(c, base_url, page_assets) for c in elem.children).strip()
        if not inner:
            inner = elem.text.strip()
        if inner:
            return f"\n\n{inner}\n\n"
        return ""
        
    # Handle line break
    elif tag == 'br':
        return "\n"
        
    # Handle list item
    elif tag == 'li':
        inner = "".join(render_to_markdown(c, base_url, page_assets) for c in elem.children).strip()
        if not inner:
            inner = elem.text.strip()
        if inner:
            return f"\n- {inner}"
        return ""
        
    # Bold / strong
    elif tag in ['strong', 'b']:
        inner = "".join(render_to_markdown(c, base_url, page_assets) for c in elem.children).strip()
        if not inner:
            inner = elem.text.strip()
        if inner:
            return f" **{inner}** "
        return ""
        
    # Italics
    elif tag in ['em', 'i']:
        inner = "".join(render_to_markdown(c, base_url, page_assets) for c in elem.children).strip()
        if not inner:
            inner = elem.text.strip()
        if inner:
            return f" *{inner}* "
        return ""
        
    # Anchor links
    elif tag == 'a':
        href = attrs.get('href', '').strip()
        inner = "".join(render_to_markdown(c, base_url, page_assets) for c in elem.children).strip()
        if not inner:
            inner = elem.text.strip()
            
        if href:
            full_href = urljoin(base_url, href)
            # Check if it's a document/asset we should track
            if any(full_href.lower().endswith(ext) for ext in ['.pdf', '.doc', '.docx', '.jpg', '.png', '.gif']):
                local_rel = register_and_queue_asset(full_href, base_url)
                if local_rel:
                    page_assets.add(full_href)
                    href = local_rel
            elif parsed_internal_url(full_href):
                # Update link to local page file
                slug = get_slug(full_href)
                href = f"./{slug}.md"
            if inner:
                return f" [{inner}]({href}) "
        elif inner:
            return inner
        return ""
        
    # Image
    elif tag == 'img':
        src = attrs.get('src', '').strip()
        alt = attrs.get('alt', 'Image').strip()
        if src:
            full_src = urljoin(base_url, src)
            local_rel = register_and_queue_asset(full_src, base_url)
            if local_rel:
                page_assets.add(full_src)
                src = local_rel
            return f"\n![{alt}]({src})\n"
        return ""
        
    # Video
    elif tag == 'video':
        src = attrs.get('src', '').strip()
        poster = attrs.get('poster', '').strip()
        
        # If video doesn't have src, check for child source tags
        if not src:
            for child in elem.children:
                if child.tag == 'source':
                    src = child.attrs.get('src', '').strip()
                    if src:
                        break
                        
        local_video_rel = None
        local_poster_rel = None
        
        if src:
            full_src = urljoin(base_url, src)
            local_video_rel = register_and_queue_asset(full_src, base_url)
            if local_video_rel:
                page_assets.add(full_src)
                
        if poster:
            full_poster = urljoin(base_url, poster)
            local_poster_rel = register_and_queue_asset(full_poster, base_url)
            if local_poster_rel:
                page_assets.add(full_poster)
                
        # Render markdown for the video
        res = "\n"
        if local_poster_rel and local_video_rel:
            res += f"[![Video Poster]({local_poster_rel})]({local_video_rel})\n"
        elif local_video_rel:
            res += f"[Play Video]({local_video_rel})\n"
            
        inner = "".join(render_to_markdown(c, base_url, page_assets) for c in elem.children if c.tag != 'source').strip()
        if inner:
            res += f"{inner}\n"
        return res
        
    elif tag == 'source':
        return ""

    # Recurse on children or get text
    text = elem.text.strip()
    inner_texts = [render_to_markdown(c, base_url, page_assets) for c in elem.children]
    res = text + "".join(inner_texts)
    return res

def clean_markdown_text(text):
    # Clean up empty spaces and duplicate newlines
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r' +', ' ', text)
    return text.strip()

def parsed_internal_url(url):
    parsed = urlparse(url)
    if parsed.scheme in ['mailto', 'tel', 'javascript']:
        return False
    return parsed.netloc == 'new-frame.de' or parsed.netloc == ''

def get_slug(url):
    parsed = urlparse(url)
    path = parsed.path
    if path == '/' or path == '/deutsch/':
        return 'home'
    
    path_parts = [p for p in path.strip('/').split('/') if p]
    if not path_parts:
        return 'home'
        
    if path_parts[-1] == 'deutsch':
        return 'home'
        
    last_part = path_parts[-1]
    if last_part.endswith('.html'):
        last_part = last_part[:-5]
        
    if len(path_parts) > 2 and path_parts[1] != last_part:
        slug = f"{path_parts[1]}_{last_part}"
    else:
        slug = last_part
        
    if parsed.query:
        qs = parse_qs(parsed.query)
        if 'id' in qs:
            slug = f"{slug}_id_{qs['id'][0]}"
            
    # Sanitize slug
    slug = "".join(c if c.isalnum() or c in ['-', '_'] else '_' for c in slug)
    return slug

def register_and_queue_asset(url, base_url):
    # Resolves full URL and maps it to local path
    full_url = urljoin(base_url, url)
    parsed = urlparse(full_url)
    
    # Check if external
    if parsed.netloc and parsed.netloc != 'new-frame.de':
        return None # Do not download external assets like youtube widgets
        
    path = parsed.path.lstrip('/')
    if not path:
        return None
        
    # Get extension
    ext = os.path.splitext(path)[1].lower()
    if not ext:
        return None
        
    if ext in ['.pdf', '.doc', '.docx', '.xls', '.xlsx']:
        subfolder = 'documents'
    elif ext in ['.mp4', '.avi', '.mov', '.wmv', '.webm']:
        subfolder = 'videos'
    elif ext in ['.jpg', '.jpeg', '.png', '.gif', '.ico', '.svg']:
        subfolder = 'images'
    else:
        return None # Unknown asset type
        
    # Strip prefixes to keep clean
    clean_path = path
    if subfolder == 'images':
        for prefix in ['images/', 'media/', 'templates/favourite/images/']:
            if clean_path.startswith(prefix):
                clean_path = clean_path[len(prefix):]
    elif subfolder == 'documents':
        for prefix in ['images/pdf/', 'pdf/', 'documents/']:
            if clean_path.startswith(prefix):
                clean_path = clean_path[len(prefix):]
    elif subfolder == 'videos':
        for prefix in ['images/videos/', 'videos/', 'images/']:
            if clean_path.startswith(prefix):
                clean_path = clean_path[len(prefix):]
                
    # Normalize paths
    clean_path = clean_path.replace('/', os.sep)
    local_path = os.path.join(ASSETS_DIR, subfolder, clean_path)
    
    # Store in download queue
    downloaded_assets[full_url] = local_path
    
    # Return relative path from pages folder to asset
    rel_path_to_asset = f"../assets/{subfolder}/{clean_path.replace(os.sep, '/')}"
    return rel_path_to_asset

def fetch_html(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req) as response:
            return response.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def download_file(url, local_path):
    if os.path.exists(local_path):
        return True # Already exists
        
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        print(f"Downloading asset: {url} -> {local_path}")
        with urllib.request.urlopen(req) as response:
            with open(local_path, 'wb') as f:
                f.write(response.read())
        time.sleep(0.1) # Brief pause
        return True
    except Exception as e:
        print(f"Error downloading asset {url}: {e}")
        return False

def parse_page_builder(page_builder_elem, base_url, page_assets):
    # Parse SP Page Builder container and return a list of components
    components = []
    
    # Find all sections
    sections = find_elements(page_builder_elem, class_val='sppb-section')
    for i, sec in enumerate(sections):
        sec_id = sec.attrs.get('id', f'section-{i}')
        # We render the section content
        md_text = render_to_markdown(sec, base_url, page_assets)
        md_text = clean_markdown_text(md_text)
        
        # Check if this is an image section, text section, or form
        sec_type = "Page Builder Section"
        titles = find_elements(sec, class_val='sppb-addon-title')
        title_str = ""
        if titles:
            title_str = titles[0].text.strip()
            sec_type = f"Section: {title_str}"
            
        components.append({
            'type': 'page_builder_section',
            'id': sec_id,
            'title': title_str or f"Section {i+1}",
            'text_content': md_text,
            'sub_type': sec_type
        })
    return components

def scrape_page(url):
    print(f"\n========================================\nScraping page: {url}")
    html = fetch_html(url)
    if not html:
        return None
        
    # Get background images from CSS/Style tags
    page_assets = set()
    bg_images = re.findall(r'url\([\'"]?(.*?)[\'"]?\)', html)
    for bg in bg_images:
        # Ignore font files, data URIs, or external domains
        if bg.startswith('data:') or any(bg.endswith(ext) for ext in ['.woff', '.woff2', '.ttf', '.eot']):
            continue
        full_bg = urljoin(url, bg)
        # Make sure it's internal
        if parsed_internal_url(full_bg):
            local_rel = register_and_queue_asset(full_bg, url)
            if local_rel:
                page_assets.add(full_bg)
                
    # Build DOM
    builder = DOMBuilder()
    builder.feed(html)
    root = builder.root
    
    # Metadata
    title_elems = find_elements(root, tag='title')
    title = title_elems[0].text.strip() if title_elems else "Untitled"
    
    meta_desc = ""
    meta_keywords = ""
    meta_elems = find_elements(root, tag='meta')
    for m in meta_elems:
        name = m.attrs.get('name', '').lower()
        if name == 'description':
            meta_desc = m.attrs.get('content', '')
        elif name == 'keywords':
            meta_keywords = m.attrs.get('content', '')
            
    # Standard Components
    # 1. Logo
    logo_components = []
    logo_elems = find_elements(root, id_val='fav-logo')
    if logo_elems:
        logo_components.append({
            'type': 'logo',
            'title': 'Website Logo',
            'text_content': clean_markdown_text(render_to_markdown(logo_elems[0], url, page_assets))
        })
        
    # 2. Main Nav Menu
    menu_components = []
    nav_elems = find_elements(root, id_val='fav-nav')
    if nav_elems:
        menu_components.append({
            'type': 'menu',
            'title': 'Navigation Menu',
            'text_content': clean_markdown_text(render_to_markdown(nav_elems[0], url, page_assets))
        })
        
    # 3. Main Content Components
    content_components = []
    
    # Check for Page Builder first
    pb_elems = find_elements(root, id_val='sp-page-builder')
    if pb_elems:
        content_components = parse_page_builder(pb_elems[0], url, page_assets)
    else:
        # Check standard article items
        article_elems = find_elements(root, class_val='item-page')
        if not article_elems:
            article_elems = find_elements(root, class_val='blog')
        if not article_elems:
            article_elems = find_elements(root, id_val='fav-maincontent')
            
        if article_elems:
            # We can split components by headings (h1, h2, h3) inside the article for detail
            # Or just render the whole article as one main content block.
            md_text = render_to_markdown(article_elems[0], url, page_assets)
            md_text = clean_markdown_text(md_text)
            content_components.append({
                'type': 'article_content',
                'title': 'Main Article Content',
                'text_content': md_text
            })
            
    # 4. References / Mainbottom Slider
    ref_components = []
    ref_elems = find_elements(root, id_val='fav-mainbottom')
    if ref_elems:
        # Extract reviews/testimonials
        slides = find_elements(ref_elems[0], class_val='slide')
        slide_contents = []
        for slide in slides:
            slide_md = clean_markdown_text(render_to_markdown(slide, url, page_assets))
            slide_contents.append(slide_md)
            
        ref_components.append({
            'type': 'references_slider',
            'title': 'References / Testimonials Slider',
            'text_content': "\n\n---\n\n".join(slide_contents) if slide_contents else clean_markdown_text(render_to_markdown(ref_elems[0], url, page_assets))
        })
        
    # 5. Social Links / Bottom
    social_components = []
    bottom_elems = find_elements(root, id_val='fav-bottom')
    if bottom_elems:
        social_components.append({
            'type': 'social_links',
            'title': 'Social Media Links',
            'text_content': clean_markdown_text(render_to_markdown(bottom_elems[0], url, page_assets))
        })
        
    # 6. Footer Copyright & Legal Links
    footer_components = []
    footer_elems = find_elements(root, id_val='fav-copyright')
    if footer_elems:
        footer_components.append({
            'type': 'footer_copyright',
            'title': 'Footer & Legal Links',
            'text_content': clean_markdown_text(render_to_markdown(footer_elems[0], url, page_assets))
        })
        
    # Combine all components in order of visual structure
    all_components = (
        logo_components + 
        menu_components + 
        content_components + 
        ref_components + 
        social_components + 
        footer_components
    )
    
    slug = get_slug(url)
    page_data = {
        'url': url,
        'slug': slug,
        'title': title,
        'meta_description': meta_desc,
        'meta_keywords': meta_keywords,
        'components': all_components,
        'assets_used': sorted(list(page_assets))
    }
    
    return page_data

def save_page_files(page_data):
    slug = page_data['slug']
    
    # Save JSON
    json_path = os.path.join(PAGES_DIR, f"{slug}.json")
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(page_data, f, ensure_ascii=False, indent=4)
        
    # Save Markdown
    md_path = os.path.join(PAGES_DIR, f"{slug}.md")
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(f"# {page_data['title']}\n\n")
        f.write(f"**URL**: {page_data['url']}\n")
        f.write(f"**Meta Description**: {page_data['meta_description']}\n")
        f.write(f"**Keywords**: {page_data['meta_keywords']}\n\n")
        f.write("## Component Hierarchy & Content\n\n")
        
        for idx, comp in enumerate(page_data['components']):
            f.write(f"### Component {idx+1}: {comp['title']} ({comp['type']})\n")
            if 'id' in comp:
                f.write(f"*Element ID*: `{comp['id']}`\n")
            f.write("\n")
            f.write(comp['text_content'])
            f.write("\n\n---\n\n")
            
        f.write("## Page Assets (Local References)\n")
        for asset in page_data['assets_used']:
            # Resolve relative local path
            parsed = urlparse(asset)
            path = parsed.path.lstrip('/')
            ext = os.path.splitext(path)[1].lower()
            if ext in ['.pdf', '.doc', '.docx']:
                sub = 'documents'
            elif ext in ['.mp4', '.avi', '.mov', '.wmv', '.webm']:
                sub = 'videos'
            else:
                sub = 'images'
                
            clean_path = path
            if sub == 'images':
                for prefix in ['images/', 'media/', 'templates/favourite/images/']:
                    if clean_path.startswith(prefix):
                        clean_path = clean_path[len(prefix):]
            elif sub == 'documents':
                for prefix in ['images/pdf/', 'pdf/', 'documents/']:
                    if clean_path.startswith(prefix):
                        clean_path = clean_path[len(prefix):]
            elif sub == 'videos':
                for prefix in ['images/videos/', 'videos/', 'images/']:
                    if clean_path.startswith(prefix):
                        clean_path = clean_path[len(prefix):]
            local_rel = f"../assets/{sub}/{clean_path.replace(os.sep, '/')}"
            f.write(f"- [{os.path.basename(path)}]({local_rel}) (Original: {asset})\n")

def generate_roadmap(scraped_pages):
    roadmap_path = os.path.join(BASE_DIR, "roadmap.md")
    with open(roadmap_path, 'w', encoding='utf-8') as f:
        f.write("# Website Roadmap - new-frame.de (Deutsch)\n\n")
        f.write("This document provides a complete sitemap, page-by-page component breakdown, and asset index for the German section of `new-frame.de`.\n\n")
        
        f.write("## Executive Summary\n")
        f.write("- **CMS**: Joomla!\n")
        f.write("- **Template**: Favourite\n")
        f.write("- **Layout Engine**: SP Page Builder (primarily on the homepage)\n")
        f.write(f"- **Total Scraped Pages**: {len(scraped_pages)}\n")
        f.write(f"- **Total Assets Downloaded**: {len(downloaded_assets)}\n\n")
        
        f.write("## Page Directory / Sitemap\n\n")
        f.write("| Page Title | URL Slug | Original URL |\n")
        f.write("| --- | --- | --- |\n")
        for page in scraped_pages:
            f.write(f"| [{page['title']}](pages/{page['slug']}.md) | `{page['slug']}` | [{page['url']}]({page['url']}) |\n")
            
        f.write("\n## Page Breakdowns (Detail)\n\n")
        for page in scraped_pages:
            f.write(f"### {page['title']} (`{page['slug']}`)\n")
            f.write(f"- **Original Link**: {page['url']}\n")
            f.write(f"- **Description**: {page['meta_description']}\n")
            f.write("- **Component Order**:\n")
            for idx, comp in enumerate(page['components']):
                desc = comp['title']
                if comp['type'] == 'page_builder_section':
                    desc = f"SP Page Builder Section - {comp['title']}"
                f.write(f"  {idx+1}. **{desc}** (`{comp['type']}`)\n")
            f.write("- **Assets Referenced**:\n")
            if page['assets_used']:
                for a in page['assets_used']:
                    # Get base name
                    bname = os.path.basename(urlparse(a).path)
                    f.write(f"  - `{bname}` (URL: {a})\n")
            else:
                f.write("  - None\n")
            f.write("\n---\n\n")
            
        f.write("## Complete Asset Directory\n\n")
        f.write("All website assets have been downloaded and sorted into subfolders: `assets/images/`, `assets/documents/`, and `assets/videos/`.\n\n")
        f.write("| Asset File | Local Relative Path | Source URL |\n")
        f.write("| --- | --- | --- |\n")
        
        # Sort asset items by path
        sorted_assets = sorted(downloaded_assets.items(), key=lambda x: x[1])
        for src_url, local_abs_path in sorted_assets:
            rel_path = os.path.relpath(local_abs_path, BASE_DIR).replace(os.sep, '/')
            filename = os.path.basename(local_abs_path)
            f.write(f"| {filename} | `{rel_path}` | [{src_url}]({src_url}) |\n")

def main():
    scraped_pages = []
    
    print(f"Starting crawl and scrape for {len(TARGET_URLS)} German pages...")
    
    # Step 1: Scrape text and analyze structures of all pages
    for url in TARGET_URLS:
        try:
            page_data = scrape_page(url)
            if page_data:
                scraped_pages.append(page_data)
                save_page_files(page_data)
                print(f"Scraped & saved: {page_data['title']} ({page_data['slug']})")
        except Exception as e:
            print(f"Error scraping {url}: {e}")
        time.sleep(0.5)
        
    # Step 2: Download all unique discovered assets
    print(f"\n========================================\nDownloading {len(downloaded_assets)} unique assets...")
    success_count = 0
    for src_url, local_path in downloaded_assets.items():
        if download_file(src_url, local_path):
            success_count += 1
            
    print(f"\nSuccessfully downloaded {success_count}/{len(downloaded_assets)} assets.")
    
    # Step 3: Generate Master Roadmap
    print("\nGenerating master website roadmap...")
    generate_roadmap(scraped_pages)
    print("Done! Master roadmap generated at: roadmap.md")
    print(f"All outputs saved under: {BASE_DIR}")

if __name__ == '__main__':
    main()
