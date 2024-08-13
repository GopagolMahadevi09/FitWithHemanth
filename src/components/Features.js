import React, {useRef,useEffect} from "react";
import { gsap} from "gsap";
import './Features.css'
import HWhite from '../assets/images/h-white.JPG'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default  function Features ()  {

let text=useRef(null);

useEffect(() => {

   gsap.to(text, {
      delay:0.4,
      duration: 1,
      x: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: text,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []);


    return (
      <div className="feautures">
        <div className="feautures--container" >
        <div className="heading" ref={el=> {text=el}} >
          <h2 >Features</h2>
          <h1>What we Offer</h1>
          <div className="features--services">
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Customised Diet</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Customised Training</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>24/7 Support</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Weekly Check-Ins</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Supplement Protocol</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>For Both Male/Female</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Bulking Or Cutting</p>
            <p className="feature--item"> <i className="fas fa-check-circle"></i>Guaranteed Results</p>  
          </div>
          </div>
        
          <div className="image" >
            <img className="features--image" src={HWhite} alt="gym"/>
          </div>
        </div>
      </div>
    )};
