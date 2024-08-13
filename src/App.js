import React from "react";
import "./style.css";
// import { Button } from './components/Button';
// import './components/Membership.css';
// import "./components/Button"
import ScrollTop from "./components/ScrollTop"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection";
import Features from "./components/Features"
// import Membership from "./components/Membership";
// import Teams from "./components/Teams";
import Video from "./components/Video"
// import Reviews from "./components/Reviews";
import Footer from "./components/Footer"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
// import Trainers from ".//pages/Trainers"
import Plans from "./pages/Plans"
import FAQs from "./pages/FAQs"



export default function App() {
  return (
    <div>
      <Router>
        <ScrollTop/>
         <Navbar/>
       {/* <HeroSection/> */}
        <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/Plans" exact component= {Plans} />
            <Route path="/Features" exact component={Features} />
            <Route path="/FAQs" exact component= {FAQs} />
            {/* <Route path="/Trainers" exact component= {Trainers} /> */}
          </Switch>
      {/* <HeroSection/>
      <Features/>
      <Membership/>
      <Teams/>
      <Video/>
      <Reviews/> */}
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