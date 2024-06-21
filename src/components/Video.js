import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import client1 from '../assets/images/client-1.jpg'
import client2 from '../assets/images/client-2.jpg'
import client3 from '../assets/images/client-3.jpg'
import client4 from '../assets/images/client-4.jpg'
import client5 from '../assets/images/client-5.jpg'

function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? 4 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === 4 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="player--container">
        <div className="">
          <div className="title">
            <h2>Recent Transformations </h2>
          </div>
          <div className="bd-example">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <ol className="carousel-indicators">
                <li onClick={() => handleSlideTo(0)} className={activeIndex === 0 ? "active" : ""}></li>
                <li onClick={() => handleSlideTo(1)} className={activeIndex === 1 ? "active" : ""}></li>
                <li onClick={() => handleSlideTo(2)} className={activeIndex === 2 ? "active" : ""}></li>
                <li onClick={() => handleSlideTo(2)} className={activeIndex === 3 ? "active" : ""}></li>
                <li onClick={() => handleSlideTo(2)} className={activeIndex === 4 ? "active" : ""}></li>
              </ol>
              <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                  <img src={client1} className="d-block w-100 h-500" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Clien ABC</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                  <img src={client2} className="d-block w-100 h-500" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Client XYZ</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                  <img src={client3} className="d-block w-100 h-500" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Client MNO</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
                </div>
                <div className={`carousel-item ${activeIndex === 3 ? "active" : ""}`}>
                  <img src={client4} className="d-block w-100 h-500" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Clien ABC</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
                <div className={`carousel-item ${activeIndex === 4 ? "active" : ""}`}>
                  <img src={client5} className="d-block w-100 h-500" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Clien ABC</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselComponent;
