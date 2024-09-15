import express from "express";
import dotenv from "dotenv";
import {connect} from "./database/db.js"
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import faqRoutes from './routes/faqRoutes.js'
import ImageKit from "imagekit";
import cookieParser from "cookie-parser";

dotenv.config();
const app=express();


const imagekit = new ImageKit({
    urlEndpoint: "https://ik.imagekit.io/uqzqfzzbn",
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY
  });

const port =process.env.PORT||8800


app.use(cors({
    origin:process.env.CLIENT_URL,
    credentials:true,
}))

app.use(cookieParser({ credentials: true }));

app.use(express.json());

app.get("/api/upload",(req,res)=>{
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
})


app.use('/api/auth',userRoutes)
app.use('/api',faqRoutes)
app.get('/',(req,res)=>{
    res.send("Is is working!!");
})

connect();
app.listen(port,()=>{
    console.log(`app is running on port no ${port}`);
})