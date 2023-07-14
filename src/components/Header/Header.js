import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo_wommate.png";
import { Link } from "react-scroll";
import "./Header.css";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="header__logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={`header__menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              className="lienA"
              to="hero"
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className="lienA"
              to="partenaire"
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Partenaires
            </Link>
          </li>
          <li>
            <Link
              className="lienA"
              to="apropos"
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              A propos
            </Link>
          </li>
          <li>
            <Link
              className="lienA"
              to="service"
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="lienA"
              to="contact"
              offset={-100}
              spy={true}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__btn">
        <FontAwesomeIcon className="icon" icon={faFacebook} />
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </div>
      <div className={`menu-toggle ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>
    </div>
  );
};

export default Header;