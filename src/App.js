import React from "react";
import "./style.css";
import Navbar from "./components/Navbar"
import ScrollTop from "./components/ScrollTop"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import Trainers from ".//pages/Trainers"
import Features from ".//pages/Features"
import Plans from "./pages/Plans"
import FAQs from "./pages/FAQs"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
        <Navbar/>
        <HeroSection/>
        <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/Plans" exact component= {Plans} />
            <Route path="/Features" exact component={Features} />
            <Route path="/FAQs" exact component= {FAQs} />
            <Route path="/Trainers" exact component= {Trainers} />
          </Switch>

          <Footer/>

        </Router>
    </div>
  );
}

/**
 <Router>
        <Navbar/>
        
        <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/Plans" exact component= {Plans} />
            <Route path="/Features" exact component= {Features} />
            <Route path="/Trainers" exact component= {Trainers} />
            <Route path="/FAQs" exact component= {FAQs} />
        </Switch>

      </Router> 
 
 */