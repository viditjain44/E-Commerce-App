import mongoose from "mongoose";

const categoryschema  = mongoose.Schema({
 name:{
    type : String , 
    default :" "
 },
 image:
 { type: String,
    default :" "

 }


},{
    timestamps: true 
})
const Catergorymodel = mongoose.model('categoty' ,categoryschema)
export  default  Catergorymodel