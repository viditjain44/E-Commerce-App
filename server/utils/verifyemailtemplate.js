

const verifyemailtemplate =({name,url})=>{
  return`
   <p> Dear ${name}</p>
  <p>Thank You for Verification from your end  </p>
    <a href=${url} style = "color: white ;background color : blue ; margin - top ;10px ">
        Verify Email 
        </a>  

   
    `
}
export default  verifyemailtemplate;
