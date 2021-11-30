import React from 'react'
import About from './Components/About';
import Features from './Components/Features';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div >
     <Navbar/>
     <About/> 
     <Projects/>
     <Features/>
     <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
