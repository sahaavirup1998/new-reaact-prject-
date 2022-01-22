import React from 'react';
import "../App.css";
import image2 from "../images/img-1.jpg"

export default function Products() {
  return (
    <div  className='products' style={{ backgroundImage: `url(${image2})`}}>
      <h1>PRODUCTS</h1>
    </div>
  )
}