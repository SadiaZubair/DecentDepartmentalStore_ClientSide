import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Carousel from 'react-bootstrap/Carousel'
import final from './images/home.png'
import pic from './images/pic5.png'
import pic1 from './images/pic3.png'
import pic2 from './images/pic4.png'
import React, { useState, useEffect } from "react";
// import './Slide.css'

function Slideshow  () {  
  return (

<Carousel >
  <Carousel.Item interval={500}>
  <img
     className="d-block w-100"
      src={pic}
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <img
      className="d-block w-100"
      src={pic1}
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={pic2}
    />
  </Carousel.Item>
</Carousel>
    )
   
}
export default Slideshow