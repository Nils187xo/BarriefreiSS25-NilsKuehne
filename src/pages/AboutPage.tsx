import React from 'react';
import '../styles/AboutPage.scss'; 
import ContactForm from '../components/ContactForm.tsx';

const AboutPage: React.FC = () => {
  return (
    <main className="aboutpage" id="content">
      <header className="aboutpage__header">
        <h1 className="aboutpage__title">Über Uns</h1>
        <p className="aboutpage__intro">
          Willkommen auf unserer barrierefreien Webseite! Wir legen großen Wert auf
          Zugänglichkeit, Kontrastverhältnisse und klare Strukturen.
        </p>
      </header>

      <section className="aboutpage__team" aria-labelledby="team-heading">
        <h2 id="team-heading">Unser Team</h2>
        <table className="aboutpage__table">
          <caption className="sr-only">Teamübersicht (Fiktiv)</caption>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">E-Mail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anna Müller</td>
              <td>Projektleitung</td>
              <td><a href="mailto:anna@example.com">anna@example.com</a></td>
            </tr>
            <tr>
              <td>Jonas Becker</td>
              <td>Entwicklung</td>
              <td><a href="mailto:jonas@example.com">jonas@example.com</a></td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="aboutpage__contact">
        <ContactForm />
      </section>

      <section className="aboutpage__faq" aria-labelledby="faq-heading">
  <h2 id="faq-heading">Häufige Fragen</h2>

  <details>
    <summary>Was bedeutet Barrierefreiheit im Web?</summary>
    <p>
      Barrierefreiheit im Web beschreibt die Gestaltung von Websites, Anwendungen und digitalen
      Inhalten so, dass sie für alle Menschen nutzbar sind – unabhängig von körperlichen,
      sensorischen, kognitiven oder technischen Einschränkungen. Dazu gehört etwa die Unterstützung
      von Screenreadern, eine einfache Navigation per Tastatur, angemessene Kontraste für Menschen
      mit Sehschwäche und verständliche Sprache für Nutzer:innen mit Lernbehinderungen. Ziel ist es,
      niemanden auszuschließen und gleichberechtigte Teilhabe im digitalen Raum zu ermöglichen.
    </p>
  </details>

  <details>
    <summary>Welche gesetzlichen Vorgaben gibt es für Barrierefreiheit?</summary>
    <p>
      In Deutschland gilt für öffentliche Stellen die Barrierefreie-Informationstechnik-Verordnung
      (BITV 2.0), die auf der europäischen Richtlinie (EU) 2016/2102 basiert. Diese schreibt vor,
      dass Websites und mobile Anwendungen barrierefrei gestaltet sein müssen. Grundlage bilden die
      Web Content Accessibility Guidelines (WCAG) 2.1 der Stufe AA. Auch private Anbieter müssen
      zunehmend barrierefrei agieren – insbesondere nach dem neuen Barrierefreiheitsstärkungsgesetz
      (BFSG), das 2025 für viele Produkte und Dienstleistungen in Kraft tritt.
    </p>
  </details>

  <details>
    <summary>Wie teste ich meine Website auf Barrierefreiheit?</summary>
    <p>
      Es gibt verschiedene Möglichkeiten, die Barrierefreiheit einer Website zu überprüfen. Dazu
      zählen automatische Tools wie WAVE, axe oder Lighthouse, die grundlegende Probleme erkennen.
      Wichtig ist aber auch das manuelle Testen – zum Beispiel per Tastatur, mit einem
      Screenreader (z. B. NVDA, VoiceOver) oder durch Nutzer:innen mit Einschränkungen. Besonders
      hilfreich sind strukturierte Tests wie der BITV-Test, bei dem nach festen Kriterien geprüft
      wird. Eine Kombination aus Tools, Checklisten und menschlichem Feedback liefert die besten
      Ergebnisse.
    </p>
  </details>

  <details>
    <summary>Was sind die WCAG-Richtlinien?</summary>
    <p>
      Die Web Content Accessibility Guidelines (WCAG) sind internationale Empfehlungen für
      barrierefreie Webinhalte, die vom W3C herausgegeben werden. Sie bestehen aus vier Prinzipien:
      wahrnehmbar, bedienbar, verständlich und robust. Jede Richtlinie ist in Erfolgskriterien
      unterteilt, die in drei Konformitätsstufen unterteilt sind (A, AA, AAA). Für gesetzliche
      Vorgaben ist in der Regel Stufe AA relevant. Die WCAG helfen Entwickler:innen, Inhalte so zu
      gestalten, dass möglichst viele Menschen davon profitieren.
    </p>
  </details>

  <details>
    <summary>Wie kann ich meine Seite für Screenreader optimieren?</summary>
    <p>
      Um Inhalte für Screenreader zugänglich zu machen, sollte strukturierter und semantischer HTML-Code
      verwendet werden: Überschriften-Hierarchie, Listen, Tabellen mit `scope`, Formulare mit `label`
      und `aria`-Attributen. Visuelle Inhalte wie Bilder sollten mit alternativen Texten (`alt`) versehen
      sein. Wichtige dynamische Inhalte brauchen ARIA-Rollen, Live-Regions oder Fokussteuerung. Auch
      eine klare Lesereihenfolge und das Vermeiden von Layouttabellen sind entscheidend. Teste regelmäßig
      mit Screenreadern, um echte Nutzer:innen-Perspektiven zu erhalten.
    </p>
  </details>

  <details>
    <summary>Was bedeutet „Tastaturzugänglichkeit“?</summary>
    <p>
      Tastaturzugänglichkeit bedeutet, dass alle interaktiven Elemente – wie Links, Buttons,
      Formularelemente und Menüs – ohne Maus, ausschließlich per Tastatur erreichbar und nutzbar
      sind. Das ist nicht nur für Menschen mit motorischen Einschränkungen relevant, sondern auch
      für Power-User oder in bestimmten Assistenzsituationen. Wichtig ist eine sinnvolle
      Tabreihenfolge, sichtbare Fokuszustände und die Möglichkeit, Dropdowns, Modale und andere
      UI-Elemente vollständig mit der Tastatur zu bedienen.
    </p>
  </details>

  <details>
    <summary>Welche Rolle spielt Kontrast bei Barrierefreiheit?</summary>
    <p>
      Ein ausreichender Kontrast zwischen Vordergrund- und Hintergrundfarben ist entscheidend für
      Menschen mit Sehbehinderungen oder Farbenfehlsichtigkeit. Die WCAG empfehlen ein Verhältnis
      von mindestens 4.5:1 für normalen Text und 3:1 für große Texte. Tools wie WebAIM Contrast
      Checker oder das Chrome DevTool helfen bei der Analyse. Auch Hover-Zustände, Buttons und
      deaktivierte Elemente sollten genug Kontrast haben, um erkannt werden zu können.
    </p>
  </details>

  <details>
    <summary>Wie berücksichtige ich kognitive Einschränkungen beim Design?</summary>
    <p>
      Für Nutzer:innen mit kognitiven Einschränkungen sind Übersichtlichkeit, klare Sprache und
      reduzierte visuelle Ablenkung wichtig. Vermeide komplexe Strukturen, lange Texte oder
      Fachjargon. Nutze einfache Navigation, wiederkehrende Muster und unterstützende Symbole oder
      Illustrationen. Auch eine Vorlesefunktion oder Leichte Sprache kann helfen. Ziel ist es,
      Inhalte intuitiv, verständlich und stressfrei nutzbar zu machen.
    </p>
  </details>

  <details>
    <summary>Welche Tools unterstützen mich bei barrierefreier Entwicklung?</summary>
    <p>
      Es gibt zahlreiche Tools zur Unterstützung: WAVE, axe, Lighthouse (für automatische Tests);
      Figma Contrast Checker und Stark (für Design); NVDA und VoiceOver (für Screenreader-Tests);
      Color Oracle (für Farbsimulationen); und der WCAG-Quickref für Richtlinien. Zusätzlich helfen
      Plugins wie tota11y oder Accessibility Insights for Web direkt im Browser beim Entwickeln.
    </p>
  </details>

  <details>
    <summary>Warum profitieren alle Nutzer:innen von Barrierefreiheit?</summary>
    <p>
      Barrierefreiheit verbessert die Usability und Zugänglichkeit für alle Menschen –
      unabhängig davon, ob eine Behinderung vorliegt. Mobile Nutzer:innen profitieren z. B. von
      klarer Struktur und großen Touchzielen, ältere Menschen von größerer Schrift und klaren
      Kontrasten. Auch Suchmaschinen-Roboter verstehen semantische Inhalte besser, was die SEO
      verbessert. Barrierefreiheit ist daher kein Extra – sie macht Webseiten robuster, zukunftssicher
      und für alle nutzbar.
    </p>
  </details>
</section>

    </main>
  );
};

export default AboutPage;





