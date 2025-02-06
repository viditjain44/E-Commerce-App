import express from  'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
 import morgan from 'morgan';
 import helmet from 'helmet';
 import connectdb from './config/connectdb.js';
import userRouter from './Routes/user.route.js';
 dotenv.config();
 const server = express();
 server.use(cors({
    credentials : true,
    origin: process.env.FRONTEND_URL
 }))
 server.use(express.json());
 server.use(cookieParser());
 server.use(morgan());
 server.use(helmet({
    contentSecurityPolicy: false

 }))
 connectdb();
 const PORT= process.env.PORT||8080
 server.get('/',(req,res)=>
{
   //server to client 
   res.json({
    message:"server is running "+PORT,
    port:"route is created"
   })    
})

server.listen(PORT,()=>
{
    console.log("server is running",PORT);
})
server.use('/api/user',userRouter)