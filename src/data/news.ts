export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  image?: string;
  excerpt: string;
  content: string;
  images?: string[];
  pdfLink?: string;
  pdfText?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "71",
    slug: "resilienz-test-personal-resilience-indicator-pri",
    title: "Resilienz-Test Personal Resilience Indicator – PRI",
    date: "16. September 2022",
    image: "assets/images/pri_resilienz-resilience-test_new-frame_christiane-waller.jpg",
    excerpt: "Was ist der PRI? Der Personal Resilience Indicator (PRI) beruht auf Selbsteinschätzungen der Teilnehmer:innen...",
    content: `### Was ist der PRI?

**Personal Resilience Indicator (PRI)**

Die Bewertung beruht auf Selbsteinschätzungen, wobei die Teilnehmer:innen gebeten werden, sich auf ihre Erfahrungen aus den vergangenen vier Wochen zu konzentrieren. Daher können aktuelle Umstände und temporäre Gemütszustände das Ergebnis beeinflussen. Wir empfehlen grundsätzlich, den Fragebogen nicht an „schwierigen“ Tagen auszufüllen (z. B. kurz nach einem Konflikt, negativem Feedback oder einem enttäuschenden Erlebnis).

Der PRI wurde in seiner englischen Originalfassung umfassend validiert. Er wurde für new-frame von einer professionellen Übersetzerin in die deutsche Sprache transferiert und lektoriert.

Besuchen Sie für weitere Details auch:
[www.resilienz-test.de](https://www.resilienz-test.de)`
  },
  {
    id: "69",
    slug: "unsicherheitsmanagement",
    title: "Unsicherheitsmanagement",
    date: "24. November 2020",
    excerpt: "Sicherheit ist ein Gefühl. Genau wie Unsicherheit auch. So wird Unsicherheitsmanagement zu Emotionsmanagement...",
    content: `Sicherheit ist ein Gefühl. Genau wie Unsicherheit auch. So wird Unsicherheitsmanagement zu Emotionsmanagement.

Der achtsame Umgang mit Emotionen kann erlernt und vertieft werden. Für mehr innere Stabilität und Klarheit in turbulenten Zeiten wie wir sie gerade im Moment durchleben. Hier biete ich individuelle Programme für jede Kundengruppe zugeschnitten an.`
  },
  {
    id: "66",
    slug: "seminarreise-auszeit-mit-gipfelstuermen-teneriffa-2020",
    title: "Seminarreise \"Auszeit mit Gipfelstürmen\" Teneriffa 2020",
    date: "18. September 2019",
    image: "assets/images/news/teneriffa_2020/S_Flyer_Auszeit_2020_online.jpg",
    excerpt: "Bewegen - Entspannen – Reflektieren. In dieser Woche haben Sie die Möglichkeit, sich intensiv um sich selbst zu kümmern...",
    content: `**Bewegen - Entspannen – Reflektieren**

In dieser Woche haben Sie die Möglichkeit, sich intensiv um sich selbst, Ihre Fitness und Ihr Wohlbefinden zu kümmern. In diversen Trainingssessions können Sie reflektieren, was gerade wichtig für Sie ist und erlernen wirksame Instrumente zum Selbst- und Emotionsmanagement.

Nutzen Sie diese Gelegenheit, um inmitten der atemberaubenden Natur Teneriffas neue Kraft zu schöpfen und Ihre persönliche Resilienz nachhaltig zu stärken.`
  },
  {
    id: "63",
    slug: "lust-auf-erfolg-workshops-mit-markus-rehm",
    title: "Lust auf Erfolg? Workshops mit Markus Rehm",
    date: "08. Mai 2017",
    image: "assets/images/2017/new-frame_workshops_mit_markus_rehm.png",
    excerpt: "Seine Geschichte und was Markus Rehm daraus gemacht hat, ist der Kern unseres Workshops. Erfahren Sie mehr über Motivation...",
    content: `Seine Geschichte und was Markus Rehm daraus gemacht hat, ist der Kern unseres Workshops. Wir geben Ihnen nicht nur die Möglichkeit, direkt mehr von ihm dazu zu erfahren, sondern auch seine Strategien für eine durchgängige Motivation zusammen mit versierten Trainern kennenzulernen und in Anwendung zu bringen.

Der Workshop fand am **24.06.2017 von 10.00 - 17.00 Uhr** auf **Schloß Eulenbroich** statt.

Weitere Details zum Tagungsort finden Sie unter [www.schloss-eulenbroich.de](http://www.schloss-eulenbroich.de).

*Anmeldungen sind für diese vergangene Veranstaltung leider nicht mehr möglich (Anmeldeschluss war der 19. Juni 2017).*`
  },
  {
    id: "57",
    slug: "ttt-trauma-tapping-technique",
    title: "TTT - Trauma Tapping Technique",
    date: "25. April 2017",
    image: "assets/images/news/ttt/zertifikat_ttt_christiane_waller.png",
    excerpt: "Erfolgreicher Zertifikatsabschluss von Christiane Waller in der Trauma Tapping Technique (TTT). Download des Zertifikats...",
    content: `**TTT - Trauma Tapping Technique** ist eine bewährte, einfache und effektive Selbsthilfe-Methode zur Stress- und Traumalinderung, die weltweit in Krisengebieten erfolgreich eingesetzt wird. Christiane Waller hat diese Ausbildung erfolgreich abgeschlossen.

Gerne integrieren wir TTT in unsere Coaching-Sitzungen zur emotionalen Entlastung.

[Kontaktieren Sie uns für ein unverbindliches Erstgespräch](/kontakt)`,
    pdfLink: "assets/documents/ttt-certified-christiane_waller_2017.pdf",
    pdfText: "Zertifikat 'TTT - Trauma Tapping Technique' als PDF-Datei ansehen"
  },
  {
    id: "55",
    slug: "vortrag-sport-und-karriere-inspiration-auf-dem-weg-zum-erfolg",
    title: "Vortrag „Sport und Karriere – Inspiration auf dem Weg zum Erfolg“",
    date: "18. April 2017",
    excerpt: "Christiane Waller (new-frame) wurde von der Tsinghua Universität Beijing und Mason Invest als Rednerin eingeladen...",
    content: `Christiane Waller (new-frame) wurde von der renommierten Tsinghua Universität Beijing und Mason Invest, einer international arbeitende Consultinggruppe, als Rednerin zu einem Vortrag eingeladen. Thema des Abends war: **„Sport und Karriere – Inspiration auf dem Weg zum Erfolg“**.

Der offene Austausch im Rahmen der dualen Karriereförderung von Spitzensportlern wurde von beiden Seiten als äußerst informativ und zukunftsweisend empfunden.`,
    images: [
      "assets/images/news/vortrag_peking_uni/thumbs/1_new_frame_tsinghua_universitaet_beijing2.jpg",
      "assets/images/news/vortrag_peking_uni/thumbs/2_new_frame_vortrag_universitaet1.jpg",
      "assets/images/news/vortrag_peking_uni/thumbs/3_new_frame_vortrag_universitaet2.jpg",
      "assets/images/news/vortrag_peking_uni/thumbs/4_new_frame_vortrag_universitaet3.jpg",
      "assets/images/news/vortrag_peking_uni/thumbs/5_new_frame_vortrag_universitaet4.jpg",
      "assets/images/news/vortrag_peking_uni/thumbs/6_new_frame_tsinghua_universitaet_beijing.jpg"
    ]
  },
  {
    id: "47",
    slug: "kickoff-veranstaltung-spitzenleistungen-mit-spitzensportlern",
    title: "KickOff-Veranstaltung \"Spitzenleistungen mit Spitzensportlern\"",
    date: "28. September 2015",
    excerpt: "Eindrücke und Downloads zu unserem neuen Trainingskonzept aus der KickOff-Veranstaltung im Schloss Eulenbroich...",
    content: `Ein großes Dankeschön gilt allen Beteiligten, Partnern und Gästen für diese mehr als gelungene Auftaktveranstaltung. Das innovative Konzept, bei dem Teilnehmer von Spitzenathleten für den beruflichen Alltag lernen können, stieß auf breite Begeisterung.

Laden Sie sich gerne den offiziellen Informationsflyer der Veranstaltung herunter.`,
    pdfLink: "assets/documents/images/downloads/startschuss_neues_trainingskonzept_new-frame.pdf",
    pdfText: "Startschuss Trainingskonzept Flyer herunterladen",
    images: [
      "assets/images/news/kickoff_2015/thumbs/workshop_teil1_001.jpg",
      "assets/images/news/kickoff_2015/thumbs/workshop_teil1_002.jpg",
      "assets/images/news/kickoff_2015/thumbs/workshop_teil1_025.jpg",
      "assets/images/news/kickoff_2015/thumbs/workshop_teil1_059.jpg",
      "assets/images/news/kickoff_2015/thumbs/workshop_teil1_061.jpg",
      "assets/images/news/kickoff_2015/thumbs/workshop_teil1_097.jpg",
      "assets/images/news/kickoff_2015/thumbs/workshop_teil2_001.jpg",
      "assets/images/news/kickoff_2015/thumbs/workshop_teil2_022.jpg"
    ]
  },
  {
    id: "46",
    slug: "new-frame-im-land-des-laechelns",
    title: "new-frame im Land des Lächelns",
    date: "31. August 2015",
    excerpt: "Einladung verschiedener chinesischer Sportinstitutionen zur Zusammenarbeit bei der dualen Karriereförderung von Spitzensportlern...",
    content: `new-frame wurde von verschiedenen führenden Sportinstitutionen in China zu einer Sondierungsreise eingeladen. Thema war die Implementierung der dualen Karriereförderung von Spitzensportlern sowie Kooperationen mit Elitesportschulen (von denen es in China ca. 20.000 gibt).

Im Austausch mit Regierungsvertretern und Sportmanagern ging es darum, neue Konzepte zur gezielten Persönlichkeitsentwicklung und Karrierebegleitung der Athletinnen und Athleten zu etablieren. Die genauen Rahmenbedingungen dieser Kooperationen werden in den kommenden Monaten erarbeitet.`,
    images: [
      "assets/images/news/china_2015/thumbs/Erstliga-Fussball-Mannschaft_Jiangsu-Guoxin-Sainty_China.JPG",
      "assets/images/news/china_2015/thumbs/Tempelanlage-China.JPG",
      "assets/images/news/china_2015/thumbs/Terrakotta-Armee_Xi-An_China.JPG",
      "assets/images/news/china_2015/thumbs/new-frame_China.JPG"
    ]
  },
  {
    id: "42",
    slug: "spitzenleistungen-mit-spitzensportlern",
    title: "Spitzenleistungen mit Spitzensportlern",
    date: "12. August 2015",
    excerpt: "Ein innovatives Trainingskonzept, bei dem Sie mit und von den Besten lernen. Events und Tagungen mit Top-Athleten...",
    content: `Spitzenleistungen mit Spitzensportlern ist ein innovatives Trainingskonzept von new-frame, bei dem Sie mit und von den Besten lernen. Sie haben die Wahl zwischen einzelnen Impuls-Events mit Hochleistungs-Sportlerinnen und -Sportlern oder strukturierten, mehrtägigen Trainingsserien.

In diesem Rahmen vermitteln wir die mentalen Erfolgsstrategien des Spitzensports direkt an Fach- und Führungskräfte in der Wirtschaft.

Gerne beraten wir Sie in einem persönlichen Gespräch über die Möglichkeiten.`,
    pdfLink: "assets/documents/images/downloads/spitzenleistungen_mit_spitzensportlern_new-frame_2015.pdf",
    pdfText: "Spitzenleistungen mit Spitzensportlern PDF-Flyer herunterladen"
  }
];
