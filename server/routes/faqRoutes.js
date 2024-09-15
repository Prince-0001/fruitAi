import {Router} from "express";
import verify from "../verifyToken.js";
import {createFaq,Faqs,deleteFaq, updateFaq} from '../controller/faqController.js'

const router=Router();


router.post('/faq',verify,createFaq);
router.delete('/faqs/:id',verify,deleteFaq);
router.get('/faqs',verify,Faqs);
router.put('/faqs/:id',updateFaq);

export default router;