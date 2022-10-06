import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Projects from './components/Projects';
import CTA from './components/CTA';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <Projects />
      <CTA />
      <About />
    </div>
  );
}

export default App;
