import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../img/logo_wommate.png";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:wommateTech@example.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+22100000000";
  };

  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/22100000000";
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-newsletter footer-section">
            <img src={logo} alt="logo" className="logo" />
            <p className="newsletter">
              Ne manquez plus aucune mise à jour ! Inscrivez-vous à notre
              newsletter dès maintenant.
            </p>
            <form action="#" className="form">
              <input
                type="email"
                className="form-input"
                placeholder="Votre email"
              />
              <button
                type="submit"
                className="form-btn"
                onClick={handleEmailClick}
              >
                S'inscrire
              </button>
            </form>
          </div>
          <div className="footer-offres footer-section">
            <h4>OFFRES</h4>
            <div className="offres">
              Porpositions de solutions numérique pour entreprise
            </div>
            <div className="offres">
              Formation personnalisées selon vos beosins
            </div>
            <div className="offres">Conseils et accompagnement</div>
            <div className="offres">
              Formations et accompagnement pour jeunes chercheurs d'emploie
            </div>
            <div className="offres">
              Formation et accompagnement pour jeunes entrepreuneurs
            </div>
          </div>

          <div className="footer-contact footer-section">
            <h4>CONTACTS</h4>
            <p>
              <a href="mailto:wommateTech@example.com">
                wommateTech@example.com
              </a>
            </p>
            <p>
              <a href="tel:+221776289674">+221 77 628 96 74</a>
            </p>
            <p>
              <a href="tel:+221782902512">+221 78 290 25 12</a>
            </p>
          </div>

          <div className="footer-reseaux footer-section">
            <hr />
            <h4>RESEAUX</h4>
            <div className="reseaux">
              <div title="Facebook">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} className="icon" />
                </a>
              </div>
              <div title="Instagram">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className="icon" />
                </a>
              </div>
              <div title="Instagram">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
              </div>
              <div title="Linkedin">
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
              </div>
              <div title="Whatsapp">
                <a
                  href="https://wa.me/+221776289674"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          &copy; 2023 Wommate. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
