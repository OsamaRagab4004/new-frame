export interface LegalDocument {
  title: string;
  sections: {
    heading?: string;
    paragraphs: string[];
  }[];
}

export const legalData: Record<string, LegalDocument> = {
  impressum: {
    title: "Impressum",
    sections: [
      {
        heading: "Angaben gemäß § 5 TMG",
        paragraphs: [
          "Christiane Waller",
          "new-frame",
          "Hanxler Str. 15",
          "52538 Gangelt"
        ]
      },
      {
        heading: "Kontakt",
        paragraphs: [
          "Telefon: +49 173 6515 053",
          "E-Mail: info@new-frame.de",
          "Website: www.new-frame.de"
        ]
      },
      {
        heading: "Umsatzsteuer",
        paragraphs: [
          "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:",
          "DE284571055"
        ]
      },
      {
        heading: "Social Media und externe Präsenzen",
        paragraphs: [
          "Dieses Impressum gilt zudem für die new-frame Unternehmensseiten in den sozialen Netzwerken Facebook, LinkedIn und XING."
        ]
      },
      {
        heading: "Streitschlichtung",
        paragraphs: [
          "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr",
          "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
        ]
      },
      {
        heading: "Haftung für Inhalte",
        paragraphs: [
          "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.",
          "Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."
        ]
      },
      {
        heading: "Haftung für Links",
        paragraphs: [
          "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.",
          "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."
        ]
      },
      {
        heading: "Urheberrecht",
        paragraphs: [
          "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
          "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
        ]
      }
    ]
  },
  agbs: {
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    sections: [
      {
        paragraphs: [
          "Die Allgemeinen Geschäftsbedingungen beziehen sich auf Seminare, Workshops und Dienstleistungen von Christiane Waller, Gut Schenkelieck, Oberlieck 5, 52525 Heinsberg, im Folgenden „Auftragnehmer“ benannt.",
          "AGBs für Seminare, Schulungen, Trainingskurse, Workshops, Aus- und Weiterbildung, Fortbildungsmaßnahmen, Tagungen; nachfolgend „Seminar“ genannt:"
        ]
      },
      {
        heading: "Reservierung, Buchung und Anmeldebestätigung",
        paragraphs: [
          "Reservierungen können Sie telefonisch, per E-Mail oder über unsere Webseite www.new-frame.de vornehmen. Wir bitten Sie, eine Reservierung schnellstmöglich schriftlich zu bestätigen.",
          "Verbindliche Buchung: Wenn Sie sich zu einer Teilnahme an einem unserer Seminare entschieden haben, melden Sie sich bitte schriftlich an. Sie können dazu das Anmeldeformular verwenden. Nach Anmeldungseingang erhalten Sie eine Rechnung, die als Anmeldebestätigung gilt.",
          "Um den Teilnehmern ein qualitativ hochwertiges Weiterbildungsprogramm zu garantieren, ist die Teilnehmerzahl in allen unseren Seminaren begrenzt. Wir empfehlen Ihnen deshalb, Ihre Anmeldung frühzeitig an uns zu senden. Die Anmeldungen werden in der Reihenfolge ihres Eingangs berücksichtigt. Wenn ein Seminar zum gewünschten Termin bereits ausgebucht ist, werden Sie umgehend informiert."
        ]
      },
      {
        heading: "Absagen und Umbuchung",
        paragraphs: [
          "Wir behalten uns vor, Seminare zeitlich oder örtlich zu verlegen bzw. abzusagen, wenn weniger als 4 Anmeldungen für ein Seminar vorliegen oder der Trainer erkrankt. Bei Absage eines Seminars durch uns erstatten wir Ihnen bereits überwiesene Gebühren in voller Höhe zurück. Weitergehende finanzielle Ansprüche uns gegenüber bestehen nicht.",
          "Änderungen des Programminhaltes, des Ablaufes oder des Veranstaltungsortes behalten wir uns aus Gründen der Aktualität vor. Im Falle einer Änderung werden Sie von uns benachrichtigt. Es können keine Ansprüche aus einer Änderung oder Verschiebung uns gegenüber geltend gemacht werden.",
          "Die Seminaranmeldung können Sie jederzeit schriftlich stornieren oder eine Ersatzperson benennen. Bei Absagen, die weniger als 14 Tage vor Veranstaltungsbeginn erfolgen, bitten wir Sie um Verständnis, dass 50% der Teilnehmergebühr berechnet werden müssen. Bei Absagen innerhalb von 4 Tagen vor der Veranstaltung oder Nichterscheinen wird die gesamte Gebühr fällig. Dies gilt auch für Einzelcoachings, bei denen von einer Mindestdauer von zwei Stunden Coachingzeit ausgegangen wird."
        ]
      },
      {
        heading: "Haftung und Verantwortung",
        paragraphs: [
          "Wir übernehmen keine Haftung für die in eine Veranstaltung eingebrachten Gegenstände. Die Seminarauswahl liegt im Verantwortungsbereich des Teilnehmers. Gerne beraten wir Sie im Vorfeld zu einer geeigneten Seminarwahl.",
          "Es wird ausdrücklich darauf hingewiesen, dass alle angebotenen Kurse und Beratungen keine Therapie darstellen. Für die Kursteilnahme und Beratungen/Coachings wird eine normale psychische und physische Belastbarkeit vorausgesetzt. Muss ein Teilnehmer wegen grob gruppen- oder prozessstörendem Verhalten von einem Kurs ausgeschlossen werden, so werden nur die Gebühren für nicht in Anspruch genommene Kurstage rückerstattet.",
          "Jeder der Teilnehmer trägt die volle Verantwortung für sich und die eigenen Handlungen innerhalb und außerhalb der Veranstaltung und kommt für verursachte Schäden selbst auf."
        ]
      },
      {
        heading: "Urheberrechte",
        paragraphs: [
          "Die Seminarunterlagen dürfen von Ihnen nur für persönliche Zwecke verwendet werden. Das Anfertigen von Kopien und jede weitere Verwendung (z.B. eigene Unterrichtsgestaltung) - auch auszugsweise - bedarf unserer schriftlichen Genehmigung. Alle Rechte bleiben uns vorbehalten."
        ]
      },
      {
        heading: "Zimmerreservierung",
        paragraphs: [
          "Falls eine Übernachtungsmöglichkeit an unseren Veranstaltungsorten gewünscht wird, sind wir selbstverständlich bei der Auswahl eines geeigneten Hotels behilflich. Eine Liste der von uns bevorzugten Häuser mit günstigen Konditionen erhalten Sie mit der Rechnung. Rufen Sie bitte direkt im gewünschten Hotel an und reservieren Sie Ihr Zimmer. Eine Preisgarantie bzw. evtl. entstehende Rücktrittskosten/Stornogebühren werden von uns nicht übernommen."
        ]
      },
      {
        heading: "Preise und Leistungen",
        paragraphs: [
          "Es gelten die Preise unserer zum Zeitpunkt der Bestellung gültigen Preisliste. Preise verstehen sich zuzüglich der gesetzlich geltenden Mehrwertsteuer.",
          "Weiterhin sind neben der Teilnahmegebühr im Seminarpreis auch die Kosten für Pausenerfrischungen und Konferenzgetränke enthalten. Sonstige teilnehmerspezifische Kosten, wie beispielsweise Reise-, Übernachtungs-, und Verpflegungskosten trägt der Teilnehmer selbst."
        ]
      },
      {
        heading: "Zahlungsbedingungen und Rechnungsstellung",
        paragraphs: [
          "Die Rechnung über die Seminargebühren wird nach schriftlicher Anmeldung versandt und ist nach Erhalt sofort und ohne Abzug zur Zahlung fällig.",
          "Bankverbindung: GLS Bank, IBAN: DE60430609676016836600, BIC: GENODEM1GLS"
        ]
      },
      {
        heading: "Inhouse Seminare (Kundenschulung vor Ort)",
        paragraphs: [
          "Die Seminare finden in einem für Schulungen geeigneten Raum beim Auftraggeber statt. Der Auftraggeber stellt alle notwendigen Arbeitsmittel und Verpflegung zur Verfügung. Weitere Absprachen laut Angebot."
        ]
      },
      {
        heading: "Datenschutz",
        paragraphs: [
          "Ihr Name, Ihre Funktion und Anschrift werden von uns gespeichert, damit wir Sie auch über unsere weiteren Veranstaltungen benachrichtigen können. Eine Weitergabe an Dritte erfolgt nicht."
        ]
      }
    ]
  },
  datenschutz: {
    title: "Datenschutzerklärung",
    sections: [
      {
        heading: "1. Datenschutz auf einen Blick",
        paragraphs: [
          "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
          "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber Christiane Waller. Dessen Kontaktdaten können Sie dem Impressum entnehmen.",
          "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. durch Eingabe in ein Kontaktformular). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).",
          "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen."
        ]
      },
      {
        heading: "2. Allgemeine Hinweise und Pflichtinformationen",
        paragraphs: [
          "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
          "Hinweis zur verantwortlichen Stelle: Christiane Waller, new-frame, Hanxler Str. 15, 52538 Gangelt. E-Mail: info@new-frame.de. Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.",
          "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.",
          "Ihnen steht im Falle von Verstößen gegen die DSGVO ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
          "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen."
        ]
      },
      {
        heading: "3. Datenerfassung auf unserer Website",
        paragraphs: [
          "Cookies: Unsere Website verwendet teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“, die nach Ende Ihres Besuchs gelöscht werden.",
          "Server-Log-Dateien: Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (z.B. Browsertyp, Betriebssystem, Referrer URL, IP-Adresse). Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.",
          "Kontaktformular: Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."
        ]
      },
      {
        heading: "4. Plugins und Tools",
        paragraphs: [
          "YouTube: Unsere Website nutzt Plugins der von Google betriebenen Seite YouTube. Betreiber der Seiten ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Wir nutzen YouTube im erweiterten Datenschutzmodus, sodass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen.",
          "Google Web Fonts: Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Web Fonts von Google. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Dazu nimmt Ihr Browser Verbindung zu Servern von Google auf.",
          "Datenschutzerklärung von Google: Weitere Details zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google unter https://policies.google.com/privacy?hl=de"
        ]
      }
    ]
  }
};
