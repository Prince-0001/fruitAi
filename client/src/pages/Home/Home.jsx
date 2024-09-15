import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="home">
      <div className="header">
        <h1>Fruit.Ai</h1>
        <h3>"Be Healthy!"</h3>
      </div>
      <div className="content">
        <div className="first">
          <div className="left">
            <h1>Chat.</h1>
          </div>
          <div className="right"></div>
        </div>
        <div className="second">
          <div className="left"></div>
          <div className="right">
            <img  src="/g_translate.png" alt="" />
          </div>
        </div>
        <div className="third">
            
          <div className="left">
            <Link to="/faq"> <h1>FAQs</h1></Link>
           
          </div>
          <div className="right">
            <Link to="/about" >
            <h1> About</h1></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
