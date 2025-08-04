import { Link } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar: React.FC = () => {
  return (
    <nav aria-label="Hauptnavigation" className="navbar">
      <ul className="navbar__list">
        <li><Link to="/" className="navbar__link">Startseite</Link></li>
        <li><Link to="/about" className="navbar__link">Über uns</Link></li>
        <li><a href="#content" className="navbar__skip-link">Zum Inhalt springen</a></li>
        <li><Link to="/resources" className="navbar__link">Ressourcen</Link></li>
        <li><Link to="/galerie" className="navbar__link">Galerie</Link></li>


      </ul>
      
    </nav>
  );
};

export default Navbar;