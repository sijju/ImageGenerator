import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongo/connect.js'
import postRoutes from './routes/postRoutes.js'
import aiRoutes from './routes/aiRoutes.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({limit:'50mb'}))

app.use('/api/post',postRoutes)
app.use('/api/ai',aiRoutes)

const startServer = async()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log('Server has started'))
    }catch(err){
        console.error(err)
    }

}

startServer()