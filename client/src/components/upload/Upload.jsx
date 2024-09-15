import React, { useRef,useState } from 'react'
import { IKContext,IKUpload } from 'imagekitio-react';
import { IKImage } from 'imagekitio-react';

const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;
const urlEndpoint = import.meta.env.VITE_IMAGE_kIT_ENDPOINT;
const authenticator =  async () => {
    try {
        const response = await fetch( import.meta.env.VITE_API_URL+'/api/upload');

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Request failed with status ${response.status}: ${errorText}`);
        }

        const data = await response.json();
        const { signature, expire, token } = data;
        return { signature, expire, token };
    } catch (error) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};
const Upload = ({img,setImg}) => {


  const ikUploadRef=useRef(null);

  const onError = err => {
      console.log("Error", err);
    };
      
  const onSuccess = res => {
    setImg((prev)=>({...prev,isLoading:false,dbData:res}))

  };
      
  const onUploadProgress = progress => {
    setImg((prev)=>({...prev,isLoading:true}))

  };
  
  const onUploadStart = evt => {
    setImg((prev)=>({...prev,isLoading:true}))
  };
  return (
    <div className='upload-container'>
      <IKContext 
        publicKey={publicKey} 
        urlEndpoint={urlEndpoint} 
        authenticator={authenticator} 
      >
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
          useUniqueFileName={true}
          onUploadProgress={onUploadProgress}
          onUploadStart={onUploadStart}
          style={{display:"none"}}
          ref={ikUploadRef}
        />
        
        <div className="upload" id='upload' onClick={()=>ikUploadRef.current.click()}>
        {(img.dbData?.filePath)? 
                <IKImage 
                urlEndpoint={import.meta.env.VITE_IMAGE_kIT_ENDPOINT}
                path={img.dbData?.filePath}
                width="300"
                style={{height:"80%",width:"80%"}}
                transformation={[{width:300}]}
                />:
            <img src="/Upload.png" alt="" />}
        </div>
        <label onClick={()=>ikUploadRef.current.click()}>upload</label>
      </IKContext>


    </div>
  )
}

export default Upload
