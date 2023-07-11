
import React from "react";
import "./About.css";
import libscode from "../../img/libscode.png";
import bella from "../../img/bella.png";
import oumar from "../../img/oumar.jpg";
import AOS from "aos";
import "aos/dist/aos.css";



const teams = [
  {
    id: 1,
    nom: "Oumar DIAGNE",
    photo: oumar,
    poste: "Développeur web IOT, ingénieur SI",
    aos: "fade-right",
  },
  {
    id: 2,
    nom: "Maimouna DIALLO",
    photo: bella,
    poste: "Développeur web, coach formatrice",
    aos: "fade-left"
  },
  {
    id: 3,
    nom: "Libasse THIAM",
    photo: libscode,
    poste: "Développeur web, ingénieur SI",
    aos: "fade-up"
  },
];

AOS.init();

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="valuesContainer" data-aos="zoom-in-down">
          <h2 data-aos="zoom-in-up">Notre mission</h2>
          <p className="nosValeurs">
            Wommate accélère la transition vers le numérique. Notre mission est
            d'accompagner toute personne souhaitant acquérir des compétences
            dans les métiers du numérique afin d'être apte a affronter le monde
            professionnel, ou digitaliser son entreprise, que ce soit au stade
            de l'idéation ou déjà en cours de développement.
          </p>
        </div>
        <div className="teamContainer">
          <h2 data-aos="zoom-in-up">Notre équipe</h2>
          <div className="teamImages">
            {teams.map((team) => (
              <div className="hero___img" data-aos={team.aos}>
                <img src={team.photo} alt="hero_img" />
                <p className="hero___info">
                  <span className="hero___name">{team.nom}</span>
                  <span className="hero___poste">{team.poste}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
