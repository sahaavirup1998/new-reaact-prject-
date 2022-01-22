import React from 'react';
import "../App.css";
import image1 from "../images/img-2.jpg"

export default function Services() {
  return (
    <div className='services' style={{ backgroundImage: `url(${image1})`}}>
      <h1 >SERVICES</h1>
    </div>
  );
}