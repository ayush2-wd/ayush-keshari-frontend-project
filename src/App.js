import './App.css';
import Navbar from './components/Navbar';
import InitialHero from './components/InitialHero';
import About from './components/About';
import SecondHero from './components/SecondHero';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Leaders from './components/Leaders';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar/>
      <InitialHero/>
      <About/>
      <SecondHero/>
      <Projects/>
      <Services/>
      <Leaders/>
      <Testimonial/>
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default App;
