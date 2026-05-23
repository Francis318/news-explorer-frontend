import "./Footer.css";
import githubIcon from "../../images/Git.png";
import facebookIcon from "../../images/facebook.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">© 2024 News Explorer, Powered by News API.</p>

      <nav className="footer__nav">
        <div className="footer__text-links">
          <Link to="/" className="footer__link">
            Inicio
          </Link>
          <a
            href="https://tripleten.com/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Practicum
          </a>
        </div>
        <div className="footer__social-links">
          <a
            href="https://github.com/Francis318"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="footer__icon" />
          </a>

          <a
            href="https://www.facebook.com/enrique.reyesalaniz"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" className="footer__icon" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
