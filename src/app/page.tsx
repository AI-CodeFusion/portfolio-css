"use client"

import React, { useEffect } from 'react'
import Image from 'next/image'

import '../app/styles/hero.css'

import '../app/styles/contact.css'
import '../app/styles/about.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Heropage = () => {
  useEffect (() => {
    Aos.init ({
      easing: "ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    Aos.refresh();
  },[]);
  return (
    <div className='main'>

      <div className='img-div'>
      <img src="syeda.jpeg" alt="Syeda" />
      </div>


      <div data-aos="zoom-out-down">
        <h1>I am Syeda Binish</h1>
        <br />
        <h2 >A Passionate Web Developer </h2>
      </div>
    </div>
  )
}

export default Heropage