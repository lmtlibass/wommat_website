import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import OurServices from './components/OurServices/OurServices';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Partenairs from './components/Partenairs/Partenairs';
import Apropos from './components/Apropos/Apropos';
import Map from './components/Map/Map';


function App() {
  return (
    <div className="App">
      
        <Header />
        <HeroSection />
        <Partenairs />
        <Apropos />
        <OurServices/>
        <About />
        <Contact />
        <Map/> {/* npm install leaflet react-router-dom react-scroll */}
        <Footer/>

        

    </div>
  );
}

export default App;
