import React from 'react'
import './about.css';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className='about'>
      <div className="first">
        <img src="/Vector.png" alt="" />
        <img src="/Vector.png" alt="" />
        <img src="/Vector.png" alt="" />
      </div>
      <div className="second">
        <h1>Fruit.Ai</h1>
        <p>Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.</p>
        <Link to="/"><button className='btn'>ABOUT</button></Link>
        
      </div>
    </div>
  )
}

export default About
