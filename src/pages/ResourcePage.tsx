import React from 'react';
import '../styles/ResourcesPage.scss';

const ResourcesPage: React.FC = () => {
  return (
    <main id="content" className="resourcespage">
      <header className="resourcespage__header">
        <h1>Ressourcen zur digitalen Barrierefreiheit</h1>
        <p>
          Diese Seite bietet eine umfangreiche Sammlung an Werkzeugen, Anleitungen und weiterführenden
          Informationen, um digitale Angebote möglichst barrierefrei zu gestalten.
        </p>
      </header>

      {/* Inhaltsverzeichnis */}
      <nav aria-label="Inhaltsverzeichnis" className="resourcespage__nav">
        <ul>
          <li><a href="#tools">Tools & Hilfsmittel</a></li>
          <li><a href="#guidelines">Richtlinien & Normen</a></li>
          <li><a href="#checklists">Checklisten</a></li>
          <li><a href="#glossary">Glossar</a></li>
          <li><a href="#downloads">Downloads</a></li>
          <li><a href="#organizations">Organisationen</a></li>
          <li><a href="#tips">Praxistipps</a></li>
          <li><a href="#studies">Forschung & Studien</a></li>
          <li><a href="#events">Veranstaltungen</a></li>
          <li><a href="#videos">Lernvideos</a></li>
        </ul>
      </nav>

      {/* 1. Tools */}
      <section id="tools" aria-labelledby="tools-heading">
        <h2 id="tools-heading">Tools & Hilfsmittel</h2>
        <ul>
          <li><a href="https://wave.webaim.org/" target="_blank" rel="noopener noreferrer">WAVE</a>: Analyse von HTML-Seiten</li>
          <li><a href="https://axe.deque.com/" target="_blank" rel="noopener noreferrer">axe DevTools</a>: Browser-Erweiterung zur Barrierefreiheitsprüfung</li>
          <li><a href="https://www.sitemorse.com/" target="_blank" rel="noopener noreferrer">Sitemorse</a>: Vollständige Audits</li>
          <li><a href="https://contrast-ratio.com/" target="_blank" rel="noopener noreferrer">Contrast Ratio</a>: Kontrastprüfung</li>
          <li><a href="https://colororacle.org/" target="_blank" rel="noopener noreferrer">Color Oracle</a>: Farbschwächen simulieren</li>
        </ul>
      </section>

      {/* 2. Guidelines */}
      <section id="guidelines" aria-labelledby="guidelines-heading">
        <h2 id="guidelines-heading">Richtlinien & Normen</h2>
        <p>Die wichtigsten Standards zur Barrierefreiheit im Web:</p>
        <ul>
          <li><a href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">WCAG 2.1 (Quickref)</a></li>
          <li><a href="https://www.bitvtest.de/" target="_blank" rel="noopener noreferrer">BITV 2.0 – Deutschland</a></li>
          <li><a href="https://section508.gov/" target="_blank" rel="noopener noreferrer">Section 508 – USA</a></li>
        </ul>
      </section>

      {/* 3. Checklists */}
      <section id="checklists" aria-labelledby="checklists-heading">
        <h2 id="checklists-heading">Checklisten</h2>
        <article>
          <h3>Entwickler:innen</h3>
          <ul>
            <li>Tastaturbedienung für alle Inhalte</li>
            <li>Alt-Texte für alle Bilder</li>
            <li>ARIA-Rollen korrekt nutzen</li>
            <li>HTML-Semantik strikt beachten</li>
          </ul>
        </article>
        <article>
          <h3>Designer:innen</h3>
          <ul>
            <li>Farben nicht allein zur Informationsvermittlung</li>
            <li>Hohe Farbkontraste (mind. 4.5:1)</li>
            <li>Responsive und skalierbare Layouts</li>
          </ul>
        </article>
      </section>

      {/* 4. Glossary */}
      <section id="glossary" aria-labelledby="glossary-heading">
        <h2 id="glossary-heading">Glossar</h2>
        <dl>
          <dt>ARIA</dt>
          <dd>Accessible Rich Internet Applications – ein Set an HTML-Attributen zur Unterstützung assistiver Technologien</dd>
          <dt>Screenreader</dt>
          <dd>Software, die visuelle Inhalte vorliest</dd>
          <dt>WCAG</dt>
          <dd>Web Content Accessibility Guidelines</dd>
        </dl>
      </section>

      {/* 5. Downloads */}
      <section id="downloads" aria-labelledby="downloads-heading">
        <h2 id="downloads-heading">Downloads</h2>
        <ul>
          <li><a href="/files/wcag-checkliste.pdf" download>WCAG Checkliste (PDF)</a></li>
          <li><a href="/files/barrierefrei-guide.docx" download>Einsteiger-Guide (Word)</a></li>
        </ul>
      </section>

      {/* 6. Organizations */}
      <section id="organizations" aria-labelledby="organizations-heading">
        <h2 id="organizations-heading">Organisationen</h2>
        <ul>
          <li><a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer">W3C – Web Accessibility Initiative</a></li>
          <li><a href="https://www.accessibility.de/" target="_blank" rel="noopener noreferrer">BIK für Alle</a></li>
          <li><a href="https://www.deque.com/" target="_blank" rel="noopener noreferrer">Deque Systems</a></li>
        </ul>
      </section>

      {/* 7. Practical Tips */}
      <section id="tips" aria-labelledby="tips-heading">
        <h2 id="tips-heading">Praxistipps</h2>
        <ul>
          <li>Fokuszustände deutlich sichtbar machen</li>
          <li>Formulare mit Labels versehen</li>
          <li>Fehlermeldungen visuell und auditiv anzeigen</li>
          <li>Alle Interaktionen per Tastatur ermöglichen</li>
        </ul>
      </section>

      {/* 8. Research */}
      <section id="studies" aria-labelledby="studies-heading">
        <h2 id="studies-heading">Forschung & Studien</h2>
        <ul>
          <li><a href="https://webaim.org/projects/screenreadersurvey9/" target="_blank" rel="noopener noreferrer">WebAIM Screen Reader Survey</a></li>
          <li><a href="https://www.bitvtest.de/bitv_test/berichte/" target="_blank" rel="noopener noreferrer">BITV-Test-Berichte</a></li>
        </ul>
      </section>

      {/* 9. Events */}
      <section id="events" aria-labelledby="events-heading">
        <h2 id="events-heading">Veranstaltungen</h2>
        <ul>
          <li><strong>Global Accessibility Awareness Day (GAAD)</strong> – jährlich im Mai</li>
          <li><strong>Inclusive Design 24</strong> – 24-Stunden Livestream</li>
          <li><a href="https://accessibilitysummit.org/" target="_blank" rel="noopener noreferrer">Accessibility Summit</a></li>
        </ul>
      </section>

      {/* 10. Videos */}
      <section id="videos" aria-labelledby="videos-heading">
        <h2 id="videos-heading">Lernvideos</h2>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=3f31oufqFSM" target="_blank" rel="noopener noreferrer">Intro to Web Accessibility (WAI)</a></li>
          <li><a href="https://www.youtube.com/watch?v=SBbWAZn8gUU" target="_blank" rel="noopener noreferrer">Barrierefreiheit erklärt (deutsch)</a></li>
        </ul>
      </section>

      {/* Optionaler Abschluss */}
      <footer className="resourcespage__footer" aria-label="Seitenabschluss">
        <p>Diese Seite wurde zuletzt aktualisiert am 22. Juni 2025.</p>
        <p>Hast du Fragen? <a href="/about#kontaktform">Kontaktiere uns!</a></p>
      </footer>
    </main>
  );
};

export default ResourcesPage;
