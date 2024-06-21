import React, {useRef,useEffect} from "react";
import './HeroSection.css';
import {Link} from "react-router-dom"
import { Button } from './Button';
import { Power3, gsap} from "gsap"
export default function HeroSection (){

 let text=useRef(null);
const tl = gsap.timeline();

useEffect(() => {


    tl.to(text,0.6, {opacity:1,y:0, ease:Power3});
    
  }, []);



  return(
   <div className= "hero-container" id="hero">
      <div className="hero--header" ref={el=> {text=el}}>
    
        <h1>Build Your Best Body</h1>
        <h3>Let's Transform Your Future with FitnessBeast</h3>

          <div className= "hero-btns">
          <Link to='/'>
            <Button buttonStyle="btn--outline" className="btn" buttonSize="btn--large" >Join Now</Button> </Link>
          </div>
          </div>
    </div>
  )
}