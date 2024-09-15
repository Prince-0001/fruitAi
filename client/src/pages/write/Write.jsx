import React, { useState } from 'react'
import './write.css'
import Upload from '../../components/upload/Upload'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'


const Write = () => {

  const navigate=useNavigate();

  const state=useLocation().state;
  const [title,SetTitle]=useState(state?.title||"");
  const [heading,setHeading]=useState(state?.heading||"");
  const [content,setContent]=useState(state?.content||"");
    const [img,setImg]= useState({
        isLoading:false,
        error:"",
        dbData:{},
      })
      
    
      const [error,setError]=useState("");
      
      const handleEvent=(e)=>{
        setData(prev=>({...prev,[e.target.name]:e.target.value}))
        setError("");
      }
      
      const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            state
            ?await axios.put(import.meta.env.VITE_API_URL+`/api/faqs/${state._id}`,{
              title,heading,content,img:img.dbData?.filePath||undefined
            },{
              withCredentials:true
            }).then(navigate('/faq'))
            :await axios.post(import.meta.env.VITE_API_URL+'/api/faq',{title,content,heading,img:img.dbData?.filePath||undefined},{
                withCredentials:true,
            }).then(navigate('/faq'))
            
        }catch(err){
            console.log(err);
            setError(err.response.data);
          }
        
      }
  return (
    <div className='write'>
     <form className="container" onSubmit={handleSubmit}>
        <div className="title">
            <label htmlFor="title">Title</label>
            <input type="text" value={title} name="title" id="title" placeholder='Enter title' onChange={(e)=>SetTitle(e.target.value)} />
        </div>
        <div className="img">
            <Upload setImg={setImg} img={img}/>
            
        </div>
        <div className="heading">
            <label htmlFor="heading">Heading</label>
            <input type="text" value={heading} name="heading" id="heading" placeholder='Enter heading' onChange={(e)=>setHeading(e.target.value)} />
        </div>
        <div className="content">
            <label htmlFor="content"> Info</label>
            <textarea name="content"value={content} id="content" onChange={(e)=>setContent(e.target.value)}></textarea>
        </div>
        <div className="button">
            <button type="submit" className='btn'>Add</button>
        </div>
     </form>
    </div>
  )
}

export default Write
