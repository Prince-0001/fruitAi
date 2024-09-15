import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDB connected")
    }
    catch(err){
        console.log(err);
    }
}