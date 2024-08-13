import React, { useState, useEffect , useRef} from 'react'
import { gsap} from "gsap";
import {features, gallery} from "../data"
import "./Features.css"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Features() {
  const [jobs, setJobs] = useState(features);
  const [value, setValue] = useState(0);
  const { company, dates, duties, title } = jobs[value];
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
    <>
       <div className="faq--header"><h1>Features</h1></div>
       <div className="fet--contain">
      
      
      <div className="feautures">
        <div className="feautures--container" >
          <div className="heading" ref={el => { text = el }} >
            <div className='title'>
              <h2>What we offer</h2>
              <div className='underline'></div>

            </div>
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
            <img className="features--image" src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="gym" />
          </div>
        </div>
        </div>
      </div>
        
    </>
  );
}