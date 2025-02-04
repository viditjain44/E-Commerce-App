import mongoose from "mongoose";
const  addressschema =  new mongoose.Schema(
    { address_line:
        {
            type : String 
        },
        city:
        {
            type : String ,
            default : ""

        },
        state:
        {
            type : String ,
            default : ""

        },
        pincode:
        {
            type : String ,
             
        },
        country:
        {
            type : String ,
             
        },
        mobile:
        {
            type : Number ,
            default:""
             
        },


    }
    ,{
        timestamps: true 
    }
)
const Adressmodel = mongoose.model("address",addressschema)
 
 export default   Adressmodel;
  