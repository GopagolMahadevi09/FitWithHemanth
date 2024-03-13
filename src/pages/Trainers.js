import React, {  useEffect , useRef} from 'react'
import {TweenMax, gsap} from "gsap";
import { Button } from '../components/Button';
import "./Trainers.css"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default function Trainers() {
  let cor=useRef(null);
useEffect(() => {

   gsap.to(cor, {
      delay:0.4,
      duration: 1,
      x: '0',
      y:"0",
      opacity: 1,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: cor,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []); 
   let corri=useRef(null);
   useEffect(() => {

   gsap.to(corri, {
      delay:0.4,
      duration: 1,
      x: '0',
      y:"0",
      opacity: 1,
      stagger:0.4,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: corri,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []); 

  let newv=useRef([]);
useEffect(() => {

   TweenMax.to(newv.current, {
      delay:0.4,
      duration: 1,
      y: '0',
      opacity: 1,
      stagger:0.0,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: ".why--container--wrapper",
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
    
  }, []); 


  return (
    <>
      <div className="faq--header"><h1>Trainer</h1></div>
       {/*<h1 className="hi">Trainers</h1>*/}
        <div className="fet--contain">
          <div className='title'>
                <h2>Why FitCoach Personal Trainer?</h2>
                <div className='underline'></div>
                <div className="">
                <p>Our trainer will develop a personalized training program that fits your body, lifestyle and budget. They are certified experts in exercise physiology, anatomy, training program development, fitness assessments and applications. They excel at applying this knowledge to help you achieve your goal and go further in life.</p>
                </div>
            </div>
        </div>
        <div className="welcome">
          <img src="https://aajatexas.org/wp-content/uploads/2019/05/470333845-56a2b67c5f9b58b7d0cdadd3.jpg" alt="FitCoach gym" ref={el=> {cor=el}}/>
          <div className="welcome--headline" ref={el=> {corri=el}}>
          <h3>Welcome to Personal Training by Hemanth</h3>
          <p>At FitCoach Personal Trainer, we're committed to treating each member as an individual, crafting personalized programs suited to their unique needs and goals. Our highly qualified trainers specialize in various areas of fitness, ensuring you receive expert guidance and support tailored to accelerate your progress safely and efficiently.</p>
           <p><strong><em>For best results, choose Personal Training by Hemanth.</em></strong></p>
        </div>
        </div>
        <div className="why">
          <h3>Why Personal Trainer</h3>
           <div className='underline'></div>
          <div className="why--container">
          <div className="why--container--wrapper" ref={el=> {newv.current[0]=el}}>
          <img className='side-images' src="https://images.unsplash.com/photo-1536922246289-88c42f957773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=904&q=80" alt="FitCoach gym"/>
          <div className="welcome--headline">
          <h3>Our goal? Achieving yours</h3>
          <p>With Personal Training, you get individual attention from an expert who will draw up a training plan customized to get you results. You will have an expert by your side all the way who is certified and equipped with the best tools and knowledge to help you get accelerated results.</p>
           <p>At FitCoach, you learn from some of the best and most passionate trainers around; you get an education that can empower you to lead a healthy and fit lifestyle.</p>
           </div>
           </div>
           <div className="why--container--wrapper" ref={el=> {newv.current[1]=el}}>
            <img className='side-images' src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="choose personal trainer by FitCoach"/>
            <div className="welcome--headline">
            <h3>Benefits</h3>
            <p>Results made personal! Get the results you want with professional, passionate and highly qualified experts who take your goals and aspirations personally.</p>
            </div>
           </div>
          
          </div>
          
        </div>

    </>
  );
}