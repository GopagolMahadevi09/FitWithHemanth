import React, {useState, useEffect} from "react";
import "./Reviews.css"
import {reviews} from "../data"
import {Button} from './Button.js'
import client1 from '../assets/images/client-1.jpg'
import client2 from '../assets/images/client-2.jpg'
import client3 from '../assets/images/client-3.jpg'
import client4 from '../assets/images/client-4.jpg'
import client5 from '../assets/images/client-5.jpg'

export default function Reviews() {
  
  const [people, setPeople] = useState(reviews);
  const [index, setIndex] = React.useState(0);

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

  return (
    <div className="container">
      <div className="player--container">
        <div className=''>
          <div className="title">
            <h2>Reviews </h2>
          </div>
          <div className="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client1} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Client Name-0</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client2} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Client Name-1</h5>
                  <p class="card-text">I have been following videos and diet plan of hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client3} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Client name-2</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client4} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Client name-4</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src={client5} class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Client name-5</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}