import React, { useContext, useEffect, useRef, useState } from 'react'
import './faq.css';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FaqChild from '../../components/faqChild/FaqChild';
const FAQ = () => {

    const [faqs,setFaqs]=useState([]);
   
    

  
    useEffect(() => {
        async function fetchFaqs() {
          try {
            const res = await axios.get(import.meta.env.VITE_API_URL + "/api/faqs", {
              withCredentials: true
            });
            setFaqs(res.data);
          } catch (err) {
            console.log(err);
          }
        }
        fetchFaqs();
      }, [faqs]);
  return (
    <div className='FAQ'>
        
        <div className="header">
            <h1>FaQ Section</h1>
        </div>
        <div className="add">
            <Link to="/write" >
            <button className='button'>Add</button>
            </Link>
        </div>
        <div className="content">
            {faqs.map((child)=>(
                <FaqChild child={child}/>
            ))}
            
        </div>
      
    </div>
  )
} 

export default FAQ
