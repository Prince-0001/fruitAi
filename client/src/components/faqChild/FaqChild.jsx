import React, { useRef, useState } from 'react'
import { IKImage } from 'imagekitio-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FaqChild = ({child}) => {
    const [showMenu,setShowMenu]=useState(false);
    const threeDot=useRef(null);

const handleDotClick=()=>{
    setShowMenu(!showMenu);
}
const handleDelete=async()=>{
    
    try{
        await axios.delete(import.meta.env.VITE_API_URL+`/api/faqs/${child._id}`,{
            withCredentials:true
        })
    }catch(err){
        console.log(err);
    }
}
  return (
    <div className="child" key={child._id}>
    <img src="/threeDots.png" className="dot-img" alt="" onClick={handleDotClick}/>
   
        <div className="three-dot " style={{ display: showMenu ? 'flex' : 'none' }}  ref={threeDot}>
                <button className='btn' onClick={handleDotClick}><img width="15" height="15" src="https://img.icons8.com/forma-light-filled/24/x.png" alt="x"/>
                </button>
                <Link to={`/write?edit=${child._id}` } state={child} className='btn'>
                <button className='btn'>Edit</button>
                </Link>
                
                <button className='btn' onClick={handleDelete}>Delete</button>
        </div>
    
<div className='left'>
    <div className="img-box">
    {(child.img)? 
                <IKImage 
                urlEndpoint={import.meta.env.VITE_IMAGE_kIT_ENDPOINT}
                path={child.img}
                width="300"
                style={{height:"100px",width:"100px"}}
                transformation={[{width:300}]}
                className='image'
                />:
                <img src="/z9vkyDW9brw.png" alt="" />}
        
        <p>{child.title}</p>
    </div>
</div>
<div className="right">
    <h3>{child.heading.substring(0,80)}</h3>
    <p>{child.content.substring(0,150)} </p>
</div>
</div>
  )
}

export default FaqChild
