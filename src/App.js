import './css/App.css';
import './js/vendors/bootstrap/bootstrap.affix.js'
import './js/portfolio.js'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testmonials from './components/Testimonials';
import Interests from './components/Interests';

function App() {
  return (
    <Router>
      <div className='App' id='home' data-spy="scroll" data-target=".navbar" data-offset="40">
        <Navbar />
        <Header />
        <About />
        <section className="section-sm bg-primary">
        </section>
        <Portfolio />
        <section className="section-sm bg-primary">
        </section>
        <Testmonials />
        <section className="section-sm bg-primary">
        </section>
        <Interests />
        <section className="section-sm bg-primary">
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
