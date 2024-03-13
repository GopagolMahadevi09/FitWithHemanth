import React, {useState, useEffect} from "react";
import "./Reviews.css"
import {reviews} from "../data"
import {Button} from './Button.js'

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
                <img src="https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3Bbaso9mG4KSB?alt=media&token=f560cba8-836e-49bb-84ee-efb19de38313" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Clien name -0</h5>
                  <p class="card-text">I have been following videos and diet plan of Hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src="https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3BbasRtM1yoEH?alt=media&token=c7899b3f-a133-4dc8-8ef6-d97a900ef427" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Client Name-1</h5>
                  <p class="card-text">I have been following videos and diet plan of hemanth for 4 weeks now, and I am amazed at how much I have learnt. He has a unique way of teaching with simple techniques that are easy to learn. His eccentric nature and gentle guidance have taught me so much.
                  </p>
                </div>
              </div>
            </div>
            <div class="col mb-4">
              <div class="card h-100">
                <img src="https://firebasestorage.googleapis.com/v0/b/scoot-production-a901c.appspot.com/o/exly%2Fe%2Fpng%3Bbasw4N9WWGN?alt=media&token=6ff9ae4d-c1c2-4409-a826-228e9991ba0d" class="card-img-top" alt="..."></img>
                <div class="card-body">
                  <h5 class="card-title">Client name-1</h5>
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