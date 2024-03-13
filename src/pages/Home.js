import React from "react";
import Video from '../components/Video'
import HeroSection from '../components/HeroSection'
import Reviews from"../components/Reviews"
import Features from "../components/Features"
import Form from "../components/Form"
import Membership from "../components/Membership"
import Teams from "../components/Teams"



export default function Home() {

  return (
    <>
      <HeroSection/>
      <Features/>
      <Membership/>
      <Teams/>
      <Video url={'https://www.youtube.com/watch?v=1jL99Btp00o'}/>
      <Reviews/>
      <Form/>

    </>
  );
}