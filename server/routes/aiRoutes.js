import express from 'express'

import * as dotenv from 'dotenv'
import { Configuration,OpenAIApi } from 'openai'
import Post from '../mongo/models/post.js'
dotenv.config()

const router = express.Router()
const config = new Configuration({
    apiKey : process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

router.get('/',(req,res)=>{
    res.send('Hello from AI')
})

router.route('/').post(async(req,res)=>{
   try{
    const {prompt} = req.body
    const aiResponse  = await openai.createImage({
        prompt,
        n : 1,
        size: "1024x1024",
        response_format:'b64_json'
    })
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({photo:image})
   }catch(err){
    console.log(err)
   }
})

export default router