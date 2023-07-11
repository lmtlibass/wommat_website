import './Contact.css'
import call from '../../img/phone.png';
import mail from '../../img/mail.png'
import mapimg from '../../img/map.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

const Contact = () => {
     return (
       <div className="contact">
         <h1 className="h1" id="contact" data-aos="zoom-in-down">
           Contact
         </h1>
         <div className="contact___container">
           <div className="contact___info" data-aos="fade-up">
             <h2 className="contact___info___title">Contactez-nous</h2>
             <p className="contact___info___text">
               Vous avez des questions ? Vous souhaitez en savoir plus sur nos
               formations ? Vous avez besoin d'un devis ? N'hésitez pas à nous
               contacter, nous vous répondrons dans les plus brefs délais !
             </p>
             <div className="contact___info___details">
               <div className="contact___info___phone">
                 <img src={call} alt="phone" />
                 <p>+221 77 777 77 77</p>
               </div>
               <div className="contact___info___email">
                 <img src={mail} alt="email" />
                 <p>contact@womatte.com</p>
               </div>
               <div className="contact___info___email">
                 <img src={mapimg} alt="email" />
                 <p>Thoés, Sénégal rue 10</p>
               </div>
             </div>
           </div>
           <div className="contact___form" data-aos="fade-down">
             <h2>Nous envoyer un message</h2>
             <form className="form___contact">
               <input type="text" placeholder="Prenom & nom" />
               <input type="mail" placeholder="contact@wommate.com" />
               <textarea row="10" col="10">
                 Message
               </textarea>
               <button type="submit">Envoyer</button>
             </form>
           </div>
         </div>
       </div>
     );
}

export default Contact;

                                   