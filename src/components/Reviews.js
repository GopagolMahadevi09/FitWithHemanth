import React, {useState, useEffect} from "react";
import "./Reviews.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {reviews} from "../data"
import client1 from '../assets/images/clm-1.JPG'
import client2 from '../assets/images/clw-4.JPEG'
import client3 from '../assets/images/clm-4.JPG'
import client4 from '../assets/images/clw-1.JPEG'
import client5 from '../assets/images/clm-2.JPEG'
import client6 from '../assets/images/clw-3.JPG'

export default function Reviews() {
  
  const [people, setPeople] = useState(reviews);
  const [index, setIndex] = React.useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const handleSlideTo = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="player--container">
        <div className=''>
          <div className="title">
            <h2>Recent Transfromations </h2>
          </div>
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
                  <div className="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client1} class="card-img-top" alt="..."></img>
                {/* <div class="card-body">
                  <h5 class="card-title">Client Name-0</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div> */}
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client2} class="card-img-top" alt="..."></img>
                {/* <div class="card-body">
                  <h5 class="card-title">Client Name-1</h5>
                  <p class="card-text">I have been following videos and diet plan of hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div> */}
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client3} class="card-img-top" alt="..."></img>
                {/* <div class="card-body">
                  <h5 class="card-title">Client name-2</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div> */}
              </div>
            </div>
                  </div>
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>  
                  <div className="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client4} class="card-img-top" alt="..."></img>
                {/* <div class="card-body">
                  <h5 class="card-title">Client name-4</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div> */}
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client5} class="card-img-top" alt="..."></img>
                {/* <div class="card-body">
                  <h5 class="card-title">Client name-5</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div> */}
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client6} class="card-img-top" alt="..."></img>
                {/* <div class="card-body">
                  <h5 class="card-title">Client name-5</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div> */}
              </div>
            </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}