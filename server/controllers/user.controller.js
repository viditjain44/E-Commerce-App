import sendEmail from "../config/sendEmail.js";
import Usermodel from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import verifyemailtemplate from "../utils/verifyemailtemplate.js";
import dotenv from 'dotenv';
const registerUsercontrollers = async  (request,response)=>
 {
    try{
       const { name,email,password} = request.body
       if(!name||!email||!password)
       {
        return response.status(400).json({
            message :"Provide the Required fields",
            error :true,
            success: false
        })

       }
       const user= await Usermodel.findOne({email})
        if(user)
        { 
            return response.json({
            message: "User Already registered",
            error: true,
            success: false

        })

        }
        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt);
        const payload = {
           name , 
           email, 
           password : hashPassword
        }
        const newUser=new Usermodel (payload)
        const save = await newUser.save()
        const verifyemailurl=`${process.env.FRONTEND_URL}/verify-email?code=${save.id}`;
        const verifyemail = await sendEmail({
            sendTo : email,
            subject : "Verificaton  of email",
            html :verifyemailtemplate({  name ,verifyemailurl })
        })
        return response.json({
            message:"User registered succesfully",
            error: false,
            succes:true,
            data: save
        

        })
    }
    catch(error)
    {
        return response.status(500).json({
            message: error.message || error,
            error : true,
            success: false
        })


    }
    
}
export default registerUsercontrollers;