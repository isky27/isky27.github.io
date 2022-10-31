
import './App.css';
import React,{useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/projects/Projects';
import Github from './Components/github/Github';
import Testimonial from './Components/testimonials/Testimonial';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import ScrollUp from './Components/scrollup/ScrollUp';
function App() {

  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    },1000);
  }

  return (
    !loading &&(<div >
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Github />
      {/* <Testimonial/> */}
      <Contact/>
    </main>
      <Footer />
      <ScrollUp/>
  </div>) 
  );
}

export default App;
