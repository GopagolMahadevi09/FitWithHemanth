import React from "react";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';
import Whatsapp from '../assets/images/whatsapp-bw.png'
import Gmail from '../assets/images/gmail-bw.png'
import Facebook from '../assets/images/facebook-bw.png'
import Instagram from '../assets/images/instagram-bw.png'


export default function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_k0m8m8j', 'template_smcaktb', form.current, {
          publicKey: 'mnMn34gjcFhFZdbwr',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <>
  <div className="footer">
     <div className="footer-container w-100 p-4">
          <div className="w-100 justify-content-center footer-class">
            <div className="footer-left">
                <div className='d-flex'>
                    <p className='footer-tag d-flex align-items-center'>Train With</p>
                    <p className='footer-label d-flex align-items-center'>FitnessBeast</p>
                </div>
                <div>
                  <div>
                <p className="footer-text mt-4">
                    Hemanth B
                </p>
                <p className="footer-text">Certified Personal Training</p>
                <div className="d-flex">
                    <ul>
                        <li className="pl-0">
                            <a href="http://wa.me/917022375016"><img src={Whatsapp}></img></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/fitness_beast_08?igsh=MTE2ODg3b3poaTEyMg%3D%3D&utm_source=qr"><img src={Instagram}></img></a>
                        </li>
                        <li>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mahadevig123@gmail.com"><img src={Gmail}></img></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/messages/t/mahadevi.gopagol"><img src={Facebook}></img></a>
                        </li>
                    </ul>
                </div>
                </div>
                 

                {/* <div className="footer-mid">
                <p className="footer-text mt-4">
                    Services
                </p>
                <p>Personal Training</p>
                <p>Personal Diet</p>
                <p>Personal Training</p>
                <p>Personal Training</p>
                </div> */}
                </div>
            </div>
            
            <div className="footer-right">
            <p className="footer-label d-flex align-items-center mb-4 justify-content-center">Stay Connected With Us</p>
            <form ref={form} onSubmit={sendEmail} className="footer-form">
                <div class="form-group d-flex mb-4">
                    <input type="text" className="form-control" id="client_name" aria-describedby="emailHelp" name="client_name" placeholder="Full Name"></input>
                </div>
                <div class="form-group d-flex mb-4">
                    <input type="text" className="form-control" id="client_email" name="client_email" placeholder="Email"></input>
                </div>
                <div class="form-group mb-4">
                    <textarea  className="form-control" id="client_msg" rows="3" name="client_msg" placeholder="Your message"></textarea>
                </div>
                <button type="submit" className="send-btn">Send</button>
            </form>
            </div>
          </div>
      </div>
    </div>
    </>
  );
}