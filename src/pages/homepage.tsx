
import '../styles/homepage.scss'; 



export default function HomePage() {
  return (
    <main className="homepage">
       <section className="homepage__hero">
        <h1>Barrierefreies Web</h1>
        <p>
          Willkommen bei unserer Initiative für digitale Barrierefreiheit. Unser Ziel ist es,
          das Internet für alle Menschen zugänglich zu machen – unabhängig von Fähigkeiten
          oder Einschränkungen.
        </p>
      </section>

      <section className="homepage__features">
        <div className="homepage__features-item">
          <h2>Was bedeutet Barrierefreiheit?</h2>
          <p>
            Digitale Barrierefreiheit bedeutet, dass Websites und Anwendungen so gestaltet sind,
            dass sie von möglichst vielen Menschen genutzt werden können.
          </p>
        </div>
      </section>

      <a href="/BarriefreiSS25-NilsKuehne/about" className="homepage__button">
        Mehr über uns
      </a>
    </main>
  );
}