import React from "react";
import './Navbar.css';
import Dumbell from '../assets/images/dumbbell.png'
import Features from '../pages/Features'


export default function Navbar() {
  return (
    <>
  <nav className="navbar">
     <div className="navbar-container">
      <div className="d-flex nav-right">
      <img src={Dumbell} className="nav-logo"></img>
        <div className='head-tag'>
          <p className='train-with'>Train With</p>
          <p className='fitness-beast'>FitnessBeast</p>
        </div>
        </div>
        <ul className='nav-menu'>
          <li className="nav-item "> <a href="/" className="nav-links "> <i className="fas fa-home"></i> </a></li>
          <li class="dropdown nav-item">
            <a class="dropbtn nav-links"><i class="fas fa-bars"></i></a>
            <div class="dropdown-content">
              <a href="../pages/Features">Feature</a>
              <a href="#">Plans</a>
              <a href="#">Trainer</a>
              <a href="#">Reviews</a>
            </div>
          </li>
          <li className="nav-item "> <a href="/" className="nav-links "> <i class="fas fa-phone"></i> </a></li>
        </ul>
      </div>
    </nav>
    </>
  );
}