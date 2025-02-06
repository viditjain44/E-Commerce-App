import { Resend } from 'resend';
import dotenv from 'dotenv';
dotenv.config();
if(!process.env.RESEND_API)
{
    console.log("provide a resend-api in the dotenv file")
}
const resend = new Resend(process.env.RESEND_API);
const sendEmail=async({
    name ,sendTo, subject , html
})=>{
    try{
        const { data, error } = await resend.emails.send({
            from: 'Vidit Jain<jainvidit365vidit@gmail.com>',
            to: [sendTo],
            subject:subject,
            html: html,
          });

         console.log('Email Sent:', data); 
    
    if (error) {
        return console.error({ error });
      }
      return data;}
      
      catch(error)
    {
        console.log(error);
    }
}
export default sendEmail