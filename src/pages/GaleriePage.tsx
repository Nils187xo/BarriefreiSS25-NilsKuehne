import React from 'react';
import '../styles/GaleriePage.scss';

const images = [
  {
    src: 'src/images/bild3.jpg',
    alt: 'Ein Waldweg im Herbst mit buntem Laub auf dem Boden',
    title: 'Wald im Herbst',
    beschreibung: 'Dieses Bild zeigt einen barrierefreien Wanderweg durch einen herbstlichen Mischwald. Es betont die Bedeutung naturbezogener Erholung für alle Menschen.',
    kategorien: ['Natur', 'Outdoor', 'Barrierefreier Tourismus']
  },
  {
    src: 'src/images/bild2.jpg',
    alt: 'Eine Stadtansicht mit abgesenktem Bordstein und Leitsystem für Blinde',
    title: 'Barrierefreie Stadt',
    beschreibung: 'Im Zentrum steht ein öffentlicher Raum, der barrierefrei gestaltet wurde: mit Rampe, Leitsystem und deutlicher Beschilderung.',
    kategorien: ['Stadt', 'Infrastruktur', 'Mobilität']
  },
  {
    src: 'src/images/AWW6S7DOSJDIDJN73SD5AJUF5U.jpg',
    alt: '',
    title: 'Fehlendes Alt-Attribut',
    beschreibung: 'Dieses Bild hat absichtlich keinen Alt-Text. Es demonstriert, wie Inhalte für Screenreader-Nutzer:innen unzugänglich werden, wenn Informationen fehlen.',
    kategorien: ['Fehler', 'Test', 'Sensibilisierung']
  },
];

const GaleriePage: React.FC = () => {
  return (
    <main id="content" className="galeriepage">
      <header className="galeriepage__header">
        <h1>Barrierefreie Bildergalerie</h1>
        <p>
          Diese Galerie demonstriert, wie Bilder in einer barrierefreien Webumgebung eingebunden
          werden können. Sie berücksichtigt Alt-Texte, Tastatursteuerung, visuelle Beschreibungen und mehr.
        </p>
      </header>

      <section className="galeriepage__intro" aria-labelledby="galerie-intro">
        <h2 id="galerie-intro">Was macht eine Galerie barrierefrei?</h2>
        <ul>
          <li>Jedes Bild hat eine sinnvolle textliche Beschreibung (via <code>alt</code> und <code>figcaption</code>)</li>
          <li>Bilder sind per Tastatur erreichbar (<code>tabindex="0"</code>)</li>
          <li>Kontraste zwischen Text und Hintergrund sind ausreichend hoch</li>
          <li>Die Bildkacheln sind semantisch mit <code>&lt;figure&gt;</code> und <code>&lt;figcaption&gt;</code> ausgezeichnet</li>
          <li>Es gibt Hinweise, wenn ein Bild nicht vollständig barrierefrei ist</li>
        </ul>
      </section>

      <section className="galeriepage__grid" aria-label="Galerieansicht">
        {images.map((img, index) => (
          <figure
            key={index}
            tabIndex={0}
            role="group"
            aria-label={`Bild ${index + 1}: ${img.title}`}
            className="galeriepage__tile"
          >
            <img src={img.src} alt={img.alt} />
            <figcaption>
              <h3>{img.title}</h3>
              <p>{img.beschreibung}</p>
              <div className="galeriepage__tags">
                {img.kategorien.map((tag, i) => (
                  <span key={i} className="galeriepage__tag">{tag}</span>
                ))}
              </div>
            </figcaption>
          </figure>
        ))}
      </section>
      <section className="galeriepage__demo-motion" aria-hidden="true">
  <div className="galeriepage__motionbox">
    <strong>Dies ist eine starke Animation</strong>
    <span aria-hidden="true" className="galeriepage__motionbox-icon">⚠️</span>
  </div>
</section>
      <section className="galeriepage__motion" aria-labelledby="motion-title">
  <h2 id="motion-title">Warum Animationen problematisch sein können</h2>
  <p>
    Animationen und bewegte Inhalte können für viele Menschen anstrengend oder sogar gesundheitlich belastend sein.
    Insbesondere Nutzer:innen mit vestibulären Störungen, Epilepsie, ADHS oder Angststörungen reagieren empfindlich
    auf schnelle Bewegungen, plötzliche Übergänge oder sich wiederholende visuelle Effekte. Was für manche modern
    oder lebendig wirkt, kann für andere zu Unwohlsein, Orientierungslosigkeit oder sogar Panik führen. Deshalb
    berücksichtigen wir die Betriebssystemeinstellungen zur Bewegungsreduktion. Wenn du in deinem System „Bewegung
    reduzieren“ aktiviert hast, verzichten wir automatisch auf visuelle Effekte. Damit respektieren wir dein
    Bedürfnis nach einem ruhigen, stabilen Nutzungserlebnis. Für Entwickler:innen ist es wichtig, Animationen nicht
    als rein gestalterisches Mittel zu sehen, sondern bewusst und verantwortungsvoll einzusetzen – oder eben gezielt
    darauf zu verzichten.
  </p>
</section>

      <aside className="galeriepage__hint" aria-label="Hinweis zur Zugänglichkeit">
        <p><strong>Hinweis:</strong> Teste diese Galerie mit einem Screenreader oder nur per Tastatur (Tab-Taste),
        um die zugängliche Struktur selbst zu erleben.</p>
      </aside>
    </main>
  );
};

export default GaleriePage;
