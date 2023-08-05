import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import gigRouter from './routes/gig.route.js'
import reviewRouter from './routes/review.route.js'
import orderRouter from  './routes/order.route.js'
import conversationRouter from './routes/conversation.route.js'
import messageRouter from './routes/message.route.js'
import cors from 'cors'
dotenv.config()
const app = express()
const port = 3000
app.set("trust proxy", 1);
app.use(json())
app.use(cookieParser())
app.use(cors({origin:"https://kizerr.pages.dev",credentials:true ,exposedHeaders: ["Set-Cookie"]}))
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/', userRouter)
app.use('/', authRouter) 
app.use('/', gigRouter)
app.use('/', reviewRouter)
app.use('/', orderRouter)
app.use('/', conversationRouter)
app.use('/', messageRouter)
app.use((err , req , res , next) => {
   const errorStatus = err.status || 500;
   const errorMessage = err.message || "Something went wrong";
   return res.status(errorStatus).send(errorMessage);   
} )

// ...

const connect = async () => {
  try {
    await mongoose.connect(process.env.CONNECT_KEY) 
    console.log(`app listening on port http://localhost:${port}`);
  } catch (error) {
    console.log(error);
  }
};
app.listen(port, () => {
  connect();
})

