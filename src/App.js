import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' >
            <Home/>
          </Route>
          <Route path='/about' >
            <About/>
          </Route>
          <Route path='/projects' >
            <Projects/>
          </Route>
          <Route path='/contact' >
            <Contact/>
          </Route>
        </Switch> 
    </Router>
  );
}

export default App;
