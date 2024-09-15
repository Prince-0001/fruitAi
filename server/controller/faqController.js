import Faq from "../module/faq.js";

export const createFaq=async(req,res)=>{
    const{img,heading,title,content}=req.body;
    try{
        const faq= await Faq.create({
            img,
            title,
            heading,
            content,
        })
        const savedFaq=await faq.save();
        res.status(200).send(savedFaq);
    }
    catch(err){
        return res.status(501).json(err);
    }
}

export const Faqs=async(req,res)=>{
    try{
        const data=await Faq.find();
        res.status(200).send(data);
    }
    catch(err){
        res.status(501).send(err);
    }
}

export const deleteFaq=async(req,res)=>{
    try{
        await Faq.findByIdAndDelete(req.params.id);
        return res.status(200).send("Deleted Successfully");
    }
    catch(err){
        return res.status(501).send(err);
    }
}

export const updateFaq = async (req, res) => {
    const id = req.params.id;
    try {
      const faq = await Faq.findById(id);
      if (!faq) {
        return res.status(404).send("FAQ not found");
      }
      // Update the FAQ item
      faq.title = req.body.title;
      faq.heading = req.body.heading;
      faq.content = req.body.content;
      faq.img=req.body.img;
      await faq.save();
      return res.status(200).send("FAQ updated successfully");
    } catch (err) {
      return res.status(501).send(err);
    }
  };