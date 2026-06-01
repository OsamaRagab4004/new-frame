export interface ChatAction {
  type: 'link' | 'video' | 'pdf';
  label: string;
  payload: string;
  poster?: string; // Used for videos to show a thumbnail
}

export interface ChatOption {
  label: string;
  nodeId: string;
}

export interface ChatNode {
  id: string;
  message: string;
  options?: ChatOption[];
  actions?: ChatAction[];
}

export const chatbotDatabase: Record<string, ChatNode> = {
  root: {
    id: 'root',
    message: 'Herzlich willkommen bei new-frame! 🌟\n\nIch bin Ihr digitaler Assistent. new-frame steht für exzellentes High-End Coaching & Consulting, das Fachkräfte, Vorstände und Spitzensportler nachweislich an die Spitze führt.\n\nWie dürfen wir Sie heute dabei unterstützen, Ihr Potenzial voll auszuschöpfen?',
    options: [
      { label: '💼 Strategisches Consulting / Beratung', nodeId: 'consulting' },
      { label: '🎯 Premium Coaching & Training', nodeId: 'coaching' },
      { label: '🤝 Über Christiane Waller (CEO)', nodeId: 'about' },
      { label: '🎥 Videos & Erfolgsgeschichten', nodeId: 'media' },
      { label: '📞 Erstgespräch & Standorte', nodeId: 'contact' }
    ]
  },
  
  // CONSULTING BRANCH
  consulting: {
    id: 'consulting',
    message: '💼 Strategisches Consulting\n\nnew-frame begleitet Ihr Unternehmen zielsicher durch Neuausrichtungen, Fusionen und Transformationen. Wir sorgen dafür, dass Reibungsverluste minimiert und Potenziale maximiert werden – emotional wie strukturell.\n\nWelches Thema steht bei Ihnen aktuell im Fokus?',
    options: [
      { label: 'Neue Unternehmenskultur & Werte', nodeId: 'cons_kultur' },
      { label: 'Erfolgreiche Veränderungsprozesse', nodeId: 'cons_change' },
      { label: 'Reibungslose Umstrukturierung', nodeId: 'cons_struct' },
      { label: 'Generationenverträge & Wissenstransfer', nodeId: 'cons_gen' },
      { label: 'High-Performance Teamtrainings', nodeId: 'cons_team' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  cons_kultur: {
    id: 'cons_kultur',
    message: '🌟 Neue Unternehmenskultur & Führung\n\nKulturen verändern sich nicht auf dem Papier, sondern in den Köpfen. Wir erarbeiten mit Ihren Teams moderne, lebendige Unternehmenswerte und offene Kommunikationskanäle.\n\nIhr Vorteil: Gesteigerte Identifikation, höhere Performance, motivierte Mitarbeiter und ein hochattraktives Arbeitgeberimage.',
    options: [
      { label: 'Anderer Consulting-Bereich', nodeId: 'consulting' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  cons_change: {
    id: 'cons_change',
    message: '📈 Erfolg bei Veränderungsprozessen\n\nVeränderung bringt oft Verunsicherung und spürbaren Leistungsabfall. new-frame steuert hier gezielt entgegen: Durch professionelle emotionale Begleitung sichern wir die Akzeptanz Ihrer Belegschaft bei Digitalisierungen oder Fusionen. So bleibt Ihre Performance stabil und Ihr Wachstum ungestört.',
    options: [
      { label: 'Anderer Consulting-Bereich', nodeId: 'consulting' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  cons_struct: {
    id: 'cons_struct',
    message: '⚙️ Effiziente Umstrukturierung\n\nWir helfen Ihnen, organisatorische Anpassungen reibungslos umzusetzen. new-frame analysiert Bruchstellen im Vorfeld, verteilt Ressourcen optimal und vermeidet unnötige Konflikte. Das Ergebnis: Eine schlanke, handlungsfähige Organisation, die bereit für die Zukunft ist.',
    options: [
      { label: 'Anderer Consulting-Bereich', nodeId: 'consulting' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  cons_gen: {
    id: 'cons_gen',
    message: '🔄 Generationenverträge & Wissenstransfer\n\nSichern Sie das wertvolle Know-how ausscheidender Leistungsträger. Durch strukturierte Mentoring-Programme und Wissenstransfer-Systeme schließt new-frame Lücken, bevor sie entstehen, und bereitet Nachwuchskräfte optimal vor.',
    options: [
      { label: 'Anderer Consulting-Bereich', nodeId: 'consulting' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  cons_team: {
    id: 'cons_team',
    message: '🤝 High-Performance Teamtrainings\n\nSelbst das beste strategische Konzept scheitert ohne Teamspirit. Wir lösen blockierende Konflikte auf Management- und Abteilungsebene nachhaltig auf. Ihre Teams lernen, Hand in Hand zu arbeiten – für maximale Energie und messbare Erfolge.',
    options: [
      { label: 'Anderer Consulting-Bereich', nodeId: 'consulting' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },

  // COACHING BRANCH
  coaching: {
    id: 'coaching',
    message: '🎯 Premium Coaching & Training\n\nErfolg beginnt im Kopf. new-frame verknüpft erstklassiges Business-Coaching mit bewährten Emotions- und Mentaltechniken aus dem Spitzensport. Wir lösen Blockaden in Rekordzeit und setzen ungeahnte Leistungsreserven frei.\n\nWählen Sie ein Spezialgebiet für mehr Details:',
    options: [
      { label: 'Diskretes Einzelcoaching', nodeId: 'coach_einzel' },
      { label: 'Systemisches Gruppencoaching', nodeId: 'coach_gruppe' },
      { label: 'wingwave® Kurzzeit-Coaching', nodeId: 'coach_wingwave' },
      { label: 'Praxisnahe Führungstrainings', nodeId: 'coach_training' },
      { label: 'Energetische Psychologie (Dr. Gallo)', nodeId: 'coach_gallo' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  coach_einzel: {
    id: 'coach_einzel',
    message: '👤 Diskretes Einzelcoaching\n\nExklusive und absolut vertrauliche Begleitung für CEOs, Vorstände und Leistungsträger. Wir optimieren Ihr Stressmanagement, lösen akute Blockaden, bereiten Sie zielsicher auf neue Führungsrollen vor und schärfen Ihre persönliche Souveränität.',
    options: [
      { label: 'Anderes Coaching-Angebot', nodeId: 'coaching' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  coach_gruppe: {
    id: 'coach_gruppe',
    message: '👥 Systemisches Gruppencoaching\n\nOptimieren Sie die Gruppendynamik. Ob Abteilungskonflikte, neue Team-Konstellationen oder kollektive Belastungsphasen – wir etablieren produktive Kommunikationsregeln und machen Ihr Team krisenfest.',
    options: [
      { label: 'Anderes Coaching-Angebot', nodeId: 'coaching' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  coach_wingwave: {
    id: 'coach_wingwave',
    message: '🦋 wingwave® Kurzzeit-Coaching (Emotions-Coaching)\n\nErleben Sie eine der effektivsten Methoden zur schnellen Stressreduktion und Leistungssteigerung. Wissenschaftlich bestens erforscht und im Spitzensport sowie Management bewährt. Durch gezielte visuelle Stimulation (REM-Phasen-Simulation) lösen wir emotionale Blockaden, Rede- oder Prüfungsängste oft in wenigen Sitzungen dauerhaft auf.',
    actions: [
      { type: 'pdf', label: 'wingwave® in der Sportpraxis (PDF)', payload: '/assets/documents/images/downloads/sport-coaching_wingwave.pdf' },
      { type: 'link', label: 'Offizielle wingwave® Website', payload: 'http://wingwave.com/' }
    ],
    options: [
      { label: 'Anderes Coaching-Angebot', nodeId: 'coaching' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  coach_training: {
    id: 'coach_training',
    message: '💼 Praxisnahe Führungstrainings\n\nMenschen mitnehmen statt nur verwalten. In intensiven Kleingruppen-Workshops trainieren wir Ihre Führungskräfte in moderner Kommunikation, resilienter Führung und Konfliktstärke. Für einen spürbar besseren Teamzusammenhalt.',
    options: [
      { label: 'Anderes Coaching-Angebot', nodeId: 'coaching' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  coach_gallo: {
    id: 'coach_gallo',
    message: '⚡ Energetische Psychologie (nach Dr. Fred Gallo)\n\nÜberwinden Sie hartnäckige Ängste, Jetlag, Rede- und Schreibblockaden auf neurosomatischer Ebene. Über sanfte Klopftechniken bestimmter Meridiane regulieren wir Ihr Nervensystem. Perfekt geeignet für schnelle Stabilität vor wichtigen Verhandlungen oder sportlichen Wettkämpfen.',
    actions: [
      { type: 'link', label: 'Fred Gallos Website (USA)', payload: 'http://energypsych.com/' }
    ],
    options: [
      { label: 'Anderes Coaching-Angebot', nodeId: 'coaching' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },

  // ABOUT BRANCH
  about: {
    id: 'about',
    message: '🤝 Christiane Waller – Ihr Erfolgspartner\n\nAls zertifizierter Senior Coach und langjährige Expertin begleitet Christiane Waller Klienten leidenschaftlich auf dem Weg zur persönlichen Höchstleistung.\n\nErfahren Sie mehr über ihre Wurzeln, Qualifikationen und den Erfolg ihrer Klienten:',
    options: [
      { label: 'Biografie & Werdegang', nodeId: 'about_bio' },
      { label: 'Qualifikationen & Lizenzen', nodeId: 'about_quals' },
      { label: 'Erfolgsberichte / Referenzen', nodeId: 'about_refs' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  about_bio: {
    id: 'about_bio',
    message: '🌱 Biografie & Vision\n\nAusgebildet an der renommierten privaten Handelsschule NSH Basel und geprägt durch langjährige Erfahrung im internationalen Umfeld der Lufthansa, verbindet Christiane Waller Schweizer Präzision, globale Perspektive und tiefe Menschenkenntnis.\n\nVision: Jeder Mensch besitzt unerschöpfliche Entwicklungspotenziale, die wir gemeinsam freisetzen. „Der Mensch ist kein human being, sondern ein human becoming.“ (Heinz von Förster).',
    options: [
      { label: 'Qualifikationen / Referenzen einsehen', nodeId: 'about' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  about_quals: {
    id: 'about_quals',
    message: '📜 Lizenzen & Höchste Standards\n\nQualität durch fundierte Ausbildung. Christiane Waller ist:\n- DVNLP-Lehrtrainerin & NLP Senior Coach\n- lizensierter wingwave-Coach\n- Experte für Trauma Tapping Technique (TTT)\n- Coach für Energetische Psychologie (nach Dr. Fred Gallo)\n- Ausgebildet in Provokativem Stil (nach Dr. Frank Farrelly)\n- CRM-Trainerin (Crew Resource Management)\n\nRegelmäßige Supervisionen sichern Ihnen exzellente Ergebnisse.',
    options: [
      { label: 'Zurück zur Übersicht', nodeId: 'about' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  about_refs: {
    id: 'about_refs',
    message: '🗣️ Klientenstimmen & Erfolge\n\nDie beste Referenz ist der messbare Erfolg unserer Klienten im Spitzensport und der Wirtschaft. Lesen Sie, was Entscheider und Athleten über die Zusammenarbeit sagen:',
    options: [
      { label: 'Christian Kühnel (Lausitzer Stahlbau)', nodeId: 'ref_kuehnel' },
      { label: 'Michael Radmer (WELL SERVICES GmbH)', nodeId: 'ref_radmer' },
      { label: 'Anna Klink (Duale Karriere & Torhüterin)', nodeId: 'ref_klink' },
      { label: 'Herbert Ott (BGM TSV Bayer 04)', nodeId: 'ref_ott' },
      { label: '⬅️ Zurück zu Über mich', nodeId: 'about' }
    ]
  },
  ref_kuehnel: {
    id: 'ref_kuehnel',
    message: '🏗️ Christian Kühnel (GF Lausitzer Stahlbau Ruhland GmbH):\n\n„Ich empfehle PRI jeder Führungskraft. Es deckt Ihre Stärken und Wachstumspotenziale detailliert auf, um im Business und in zwischenmenschlichen Beziehungen stets überlegt, souverän und hocheffizient zu agieren.“',
    options: [
      { label: 'Andere Referenzen einsehen', nodeId: 'about_refs' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  ref_radmer: {
    id: 'ref_radmer',
    message: '🛢️ Michael Radmer (GF WELL SERVICES GmbH):\n\n„Der PRI half uns, Stressfaktoren präzise zu identifizieren und abzubauen. Wir setzen ihn im gesamten Team ein. Herausforderungen zu bewältigen ist seitdem extrem viel leichter als früher.“',
    options: [
      { label: 'Andere Referenzen einsehen', nodeId: 'about_refs' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  ref_klink: {
    id: 'ref_klink',
    message: '⚽ Anna Klink (Torhüterin Bayer 04 Leverkusen):\n\n„New Frame hat mir die Augen geöffnet. Durch Coachings habe ich meinen Standpunkt definiert, wichtige Zukunftsentscheidungen getroffen und mentale Techniken erlernt, die mir im Leistungssport enorme Ruhe schenken.“',
    actions: [
      { type: 'video', label: 'Testimonial Anna Klink ansehen', payload: '/assets/videos/new-frame_christiane_waller_testimonial_anna_klink_s.mp4', poster: '/assets/images/videos/new-frame_christiane_waller_testimonial_anna_klink_s.jpg' }
    ],
    options: [
      { label: 'Andere Referenzen einsehen', nodeId: 'about_refs' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  ref_ott: {
    id: 'ref_ott',
    message: '🏥 Herbert Ott (TSV Bayer 04 Leverkusen - BGM):\n\n„Mehrere Schulungen wurden hervorragend umgesetzt. Professionelle Vorbereitung, super verständliche Vermittlung und kinderleichte Implementierung der Ergebnisse in unsere Betriebsabläufe.“',
    actions: [
      { type: 'pdf', label: 'Referenzschreiben TSV Bayer 04 (PDF)', payload: '/assets/documents/Referenz_TSV_Betriebliches_Gesundheitsmanagement.pdf' }
    ],
    options: [
      { label: 'Andere Referenzen einsehen', nodeId: 'about_refs' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },

  // MEDIA BRANCH
  media: {
    id: 'media',
    message: '🎬 Videos & Erfolgsgeschichten\n\nErleben Sie new-frame in Aktion. Hören Sie Statements von Spitzensportlern und Christiane Waller über die Praxis unserer Coaching-Programme.\n\nWählen Sie ein Video zum Abspielen direkt im Chat:',
    options: [
      { label: 'new-frame Imagefilm', nodeId: 'vid_imagefilm' },
      { label: 'Testimonial Anna Klink', nodeId: 'vid_klink' },
      { label: 'Duale Karriere im Sport', nodeId: 'vid_karriere' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  vid_imagefilm: {
    id: 'vid_imagefilm',
    message: '🎥 new-frame Imagefilm:\n\nEntdecken Sie unser Credo, unsere Räumlichkeiten und gewinnen Sie unmittelbare Einblicke in die Arbeit mit Führungskräften und Profisportlern.',
    actions: [
      { type: 'video', label: 'new-frame Imagefilm abspielen', payload: '/assets/videos/new-frame_imagefilm_christiane_waller_s.mp4', poster: '/assets/images/videos/new-frame_imagefilm_christiane_waller_s.jpg' }
    ],
    options: [
      { label: 'Anderes Video ansehen', nodeId: 'media' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  vid_klink: {
    id: 'vid_klink',
    message: '⚽ Testimonial Anna Klink:\n\nErfahren Sie direkt von der Bundesliga-Torhüterin, wie Personal Coaching mentale Stärke unter extremem Leistungsdruck freisetzt.',
    actions: [
      { type: 'video', label: 'Anna Klink Testimonial abspielen', payload: '/assets/videos/new-frame_christiane_waller_testimonial_anna_klink_s.mp4', poster: '/assets/images/videos/new-frame_christiane_waller_testimonial_anna_klink_s.jpg' }
    ],
    options: [
      { label: 'Anderes Video ansehen', nodeId: 'media' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  vid_karriere: {
    id: 'vid_karriere',
    message: '🏆 Duale Karriere & Mentalstärke:\n\nStatements über die erfolgreiche Balance zwischen Profisport, akademischer Karriere und mentalem Begleitcoaching im Rahmen der Kooperation mit Bayer Leverkusen.',
    actions: [
      { type: 'video', label: 'Duale Karriere Video abspielen', payload: '/assets/videos/newframeblog_Duale-Karriere_01.mp4', poster: '/assets/images/videos/newframeblog_Duale-Karriere_01.jpg' }
    ],
    options: [
      { label: 'Anderes Video ansehen', nodeId: 'media' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },

  // CONTACT BRANCH
  contact: {
    id: 'contact',
    message: '📞 Ihr Weg zu new-frame\n\nBereit für Ihren nächsten Entwicklungsschritt? Starten Sie jetzt mit einem unverbindlichen Erstgespräch. Wir nehmen uns Zeit für Sie.\n\nWie möchten Sie uns kontaktieren?',
    options: [
      { label: 'Wie kann ich Kontakt aufnehmen?', nodeId: 'contact_info' },
      { label: 'Standorte & Anschriften einsehen', nodeId: 'contact_locs' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  contact_info: {
    id: 'contact_info',
    message: '✉️ Kontakt aufnehmen:\n\nWir freuen uns auf Sie! Sie erreichen uns direkt unter +49 173 6515 053 oder via info@new-frame.de. Alternativ können Sie direkt unser 3-Schritte-Formular ausfüllen, um Ihr Anliegen sofort strukturiert zu übermitteln:',
    actions: [
      { type: 'link', label: 'Zum Kontaktformular wechseln', payload: '/kontakt' }
    ],
    options: [
      { label: 'Standorte ansehen', nodeId: 'contact_locs' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  },
  contact_locs: {
    id: 'contact_locs',
    message: '🏡 Unsere inspirierenden Standorte\n\nCoaching braucht den richtigen Raum. Wir begrüßen Sie an zwei außergewöhnlichen Orten:\n\n1. Hauptstandort Gangelt: Historisches Gebäude „Alter Bahnhof Gangelt“ – Hanxler Str. 15, 52538 Gangelt\n\n2. Selfkant-Wehr: Barrierefreies, naturnahes Arbeiten auf dem Bauernhof – Dorfstr. 55, 52538 Selfkant-Wehr',
    options: [
      { label: 'Kontaktinfos anzeigen', nodeId: 'contact_info' },
      { label: '⬅️ Hauptmenü', nodeId: 'root' }
    ]
  }
};
