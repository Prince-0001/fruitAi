import mongoose from "mongoose";

const faqSchema= new mongoose.Schema({
    img:{
        type:String,
        required:false,
    },
    title:{
        type:String,
        required:true,

    },
    heading:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true
    }
})

export default mongoose.model("faq",faqSchema);