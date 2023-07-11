import "./Partenairs.css";
import logo from "../../img/logo_wommate.png";
import img2 from "../../img/apropos.png";
import img3 from "../../img/active-solution-logo.png";
import img4 from "../../img/logo-minamemontre.jpg";
import img5 from "../../img/logo-bella.jpg";
import odia from "../../img/odia.jpg"
import React, { useState } from "react";
import flecheGauche from "../../img/fleche-gauche.png";
import flecheDroite from "../../img/fleche-droite.png";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [logo,odia,img2,img3,img4,img5,];

AOS.init();
const Partenairs = () => {
     const [currentIndex, setCurrentIndex] = useState(0);

     const nextSlide = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
     };

     const prevSlide = () => {
          setCurrentIndex(
               (prevIndex) => (prevIndex - 1 + images.length) % images.length
          );
     };
     return (
       <div className="partenairs">
         <div className="partenairs__title">
           <h1 className="h1" id="partenaire" data-aos="zoom-in-up">
             Partenaires
           </h1>
         </div>
         <div className="carrousel">
           <div className="partenairs__content">
             <button onClick={prevSlide} className="slide-btn">
               <img src={flecheGauche} alt="fleche-gauche" />
             </button>

             <div className="partenairs__img">
               <img src={images[currentIndex]} alt="logo" />
               {!currentIndex ? (
                 <img src={images[currentIndex + 1]} alt="logo" />
               ) : (
                 <img src={images[currentIndex - 1]} alt="logo" />
               )}
             </div>

             <button onClick={nextSlide} className="slide-btn">
               <img src={flecheDroite} alt="fleche-droite" />
             </button>
           </div>
         </div>
       </div>
     );
};

export default Partenairs;
