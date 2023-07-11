import "./Apropos.css";
import apropos_img from "../../img/apropos.png"
import AOS from "aos";


AOS.init();

const Apropos = () => {
     return (
       <div className="apropos">
         <div className="apropos__title">
           <h1 className="h1" id="apropos" data-aos="zoom-in-up">
             A propos
           </h1>
         </div>
         <div className="apropos__content">
           <div
             className="apropos__text"
             data-aos="fade-up"
             data-aos-anchor-placement="bottom-bottom"
           >
             <h2 className="h2">
               Découvrez Wommate, votre partenaire idéal pour la réussite
               professionnelle !
             </h2>
             <p>
               Nous sommes une entreprise spécialisée dans la formation et
               l'accompagnement sur mesure des
               <span> chercheurs d'emploi</span>, des{" "}
               <span>entrepreneurs et futurs entrepreneurs</span>, ainsi que des{" "}
               <span>petites et moyennes entreprises</span>. Explorez nos offres
               variées, comprenant une vaste gamme de ressources, de conseils et
               de formations adaptées à vos besoins. N'hésitez pas à nous
               contacter dès maintenant pour bénéficier de nos services. Faites
               un pas vers l'excellence et laissez-nous vous aider à réaliser
               vos objectifs professionnels.
             </p>
             <button className="btn">
               <a href="#service" className="lienP" >
                 Nos services
               </a>
             </button>
           </div>
           <div
             className="apropos__img"
             data-aos="fade-up"
             data-aos-anchor-placement="bottom-bottom"
           >
             <img src={apropos_img} alt="" />
           </div>
         </div>
       </div>
     );
};

export default Apropos;
