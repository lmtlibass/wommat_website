import heroImg from '../../img/heros_img.png';
import './HeroSection.css';


const HeroSection = () => {
   
     return (
          <div className="hero-container" id='hero'>
              <div className="hero__text">
                    <p className='title'>Assure ton<br /> 
                         <span>devenir </span>
                         professionelle</p>
                    <p>
                         
                         Découvrez notre service unique avec deux
                         offres exceptionnelles ! Avec Wommate, vous avez le choix entre une offre complète de formation et d'accompagnement, ou bien la possibilité de trouver des
                         experts pour vous aider à digitaliser
                         votre entreprise.
                    </p>
                    <div className="hero__btn">
                         <button className='btns'>
                              Commencer
                         </button>
                         <button className='btns-2'>
                              Commencer
                         </button>
                    </div>
               </div>
               <div className="hero__img">
                    <img src={heroImg} alt="hero_img" />
               </div>

                         
          </div>
     )
     }

export default HeroSection