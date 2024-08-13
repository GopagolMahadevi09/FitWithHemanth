import React, {useRef,useEffect} from "react";
import { gsap} from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import'./Teams.css'
import hemanthImage from '../assets/images/h-biceps.JPEG'



gsap.registerPlugin(ScrollTrigger);

export default function Teams() {

let img1=useRef(null);



useEffect(() => {

   gsap.to(img1, {
      duration: 1,
      x: '0',
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: img1,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
    
  }, []);



  return (
  <div className="team">
    <div className="team--wrapper">
      <div className="team--text">
         <h2 >FitnessBeast</h2>
          <h1>Meet Our Trainer </h1>
          <div className="trainer-content">
          <div className="features--services">
              <p className="feature--item"> <i className="fas fa-check-circle"></i>International certified trainer accredited by ISSA,ACE.</p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i> Leads a team of 3 personal trainers.</p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i>7+ years of experience in the fitness industry nd personal trainer </p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i>Helped 200+ clients to achieve their fitness goals. Online/offline</p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i>Helped 200+ clients to achieve their fitness goals. Online/offline</p>
              <p className="feature--item"> <i className="fas fa-check-circle"></i>Followed by 5k+ on Instagram</p>
            </div>

          </div>
      </div>
      <div className="team--card" ref={el=> {img1=el}}>
        <img src={hemanthImage} alt="Trainer Hemanth" className="team--image"/>
        <p>Hemanth</p>
      </div>
    </div>
    <div className="fet--contain-teams">
      <div className="title">
        <h2>Why FitnessBeast?</h2>
        <div className="underline"></div>
        <div className="">
          <p>
              Turn your life around with a membership that fits your life and
              needs. Whether you’re a fresh beginner or a committed expert,
              FitCoach memberships are for those who insist on the best.
          </p>
        </div>
      </div>
    </div>
  </div>
    )
    };