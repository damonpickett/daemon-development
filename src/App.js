import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import BurgerMenu from './components/BurgerMenu';
import ContactModal from './components/ContactModal';
import Intro from './components/Intro';
import Projects from './components/Projects';
import CTA from './components/CTA';
import About from './components/About';
import Social from './components/Social';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {

  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Navigation setMenu={setMenu} setModal={setModal} />
      <BurgerMenu menu={menu} setMenu={setMenu} />
      <Intro />
      <Projects />
      <CTA setModal={setModal}/>
      <About />
      <Social />
      <ContactModal modal={modal} setModal={setModal} />
    </div>
  );
}

export default App;
