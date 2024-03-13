import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? 2 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === 2 ? 0 : activeIndex + 1;
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
              </ol>
              <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3Bbasw4N9WWGN?alt=media&token=6ff9ae4d-c1c2-4409-a826-228e9991ba0d" className="d-block w-100" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Clien ABC</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3Bbaso9mG4KSB?alt=media&token=f560cba8-836e-49bb-84ee-efb19de38313" className="d-block w-100" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Client XYZ</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3BbasRtM1yoEH?alt=media&token=c7899b3f-a133-4dc8-8ef6-d97a900ef427" className="d-block w-100" alt="..."></img>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Client MNO</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
