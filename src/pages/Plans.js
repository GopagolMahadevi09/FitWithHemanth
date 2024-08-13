import { Button } from '../components/Button';
import React, { useEffect, useRef } from 'react';
import { TweenMax, gsap } from 'gsap';
import Membership from '../components/Membership';
import './Plans.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import join1 from '../assets/images/withClient1.JPEG'
gsap.registerPlugin(ScrollTrigger);
export default function Plans() {
  let newv = useRef([]);
  useEffect(() => {
    TweenMax.to(newv.current, {
      delay: 0.4,
      duration: 1,
      y: '0',
      opacity: 1,
      stagger: 0.4,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: '.plan--info',
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);

  let cor = useRef(null);
  useEffect(() => {
    gsap.to(cor, {
      delay: 0.4,
      duration: 1,
      x: '0',
      y: '0',
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
  let corri = useRef(null);
  useEffect(() => {
    gsap.to(corri, {
      delay: 0.4,
      duration: 1,
      x: '0',
      y: '0',
      opacity: 1,
      stagger: 0.4,
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

  let mem = useRef(null);
  useEffect(() => {
    gsap.to(mem, {
      delay: 0.4,
      duration: 1,
      y: '0',
      opacity: 1,
      stagger: 0.4,
      ease: 'ease-in',
      scrollTrigger: {
        trigger: mem,
        start: 'top 90%',
        end: 'bottom 60%',
        toggleActions: 'restart complete ',
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    });
  }, []);
  let text = useRef(null);
  useEffect(() => {
    gsap.from(text, {
      delay: 0.4,
      duration: 1,
      y: '0',
      x: '0',
      opacity: 0,
      scale: 0.5,
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
      <div className="faq--header">
        <h1>Plans</h1>
      </div>
      {/*<h1 className="hi">plans</h1>*/}
      <div className="fet--contain">
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
      <div className="plan__container">
        <div
          className="plan--info"
          ref={(el) => {
            newv.current[0] = el;
          }}
        >
          <h4>Consistent Progress</h4>
          <p>
            Achieve the results you desire by committing to regular, consistent training sessions. Patience and persistence are key components in sculpting your body and achieving your fitness goals. Embrace the journey and trust the process.
          </p>
        </div>
        <div
          className="plan--info"
          ref={(el) => {
            newv.current[1] = el;
          }}
        >
          <h4>Infectious Motivation</h4>
          <p>
            Elevate your workout experience with contagious enthusiasm! Harness the latest advancements in fitness technology and personalized training programs designed specifically for you. Let passion drive your fitness journey as we strive for excellence together every day.
          </p>
        </div>
        <div
          className="plan--info"
          ref={(el) => {
            newv.current[2] = el;
          }}
        >
          <h4>Ultimate Accessibility</h4>
          <p>
            Unlock unparalleled convenience with personalized training plans tailored to your needs. Gain access to exclusive training sessions and innovative fitness solutions. Experience the pinnacle of practicality and satisfaction as we embark on your fitness journey together.
          </p>
        </div>
      </div>
      <div className="join-us">
        <div className="joinus--container">
          <img
            src="https://drive.google.com/file/d/1bb9W1RaInagXdPKz-hfhuAmmw4qkDNxD/view?usp=sharing"
            alt="membership"
            ref={(el) => {
              cor = el;
            }}
          />
          <div
            className="joinus--headline"
            ref={(el) => {
              corri = el;
            }}
          >
            <h3>How to Join</h3>
            <p>
              Apply online or contact our trainer and activate your FitCoach
              memberships in minutes to train for the future. Our memberships
              are your shortcut to your fitness ambitions.
            </p>
            <Button buttonStyle="btn--primary" buttonSize="btn--large">
              Join Us{' '}
            </Button>
          </div>
        </div>
      </div>
      <div
        className=""
        ref={(el) => {
          mem = el;
        }}
      >
        
      </div>
      <Membership />
      <div
        className="refer"
        ref={(el) => {
          text = el;
        }}
      >
      </div>
    </>
  );
}
