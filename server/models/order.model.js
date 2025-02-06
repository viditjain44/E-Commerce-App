import mongoose from "mongoose";
 

const orderSchema=  new mongoose.Schema({
 userId : {
   type : mongoose.Schema.ObjectId,
   ref: 'User'
 },
 orderId :{
    type: String ,
    required : [true ,"Provide orderId "],
    unique: true 

 },
 productId:{
      type:mongoose.Schema.ObjectId,
      ref: "product"
 },
 productdetails: {
    _id:String,
    name:String,
    image: Array,

 },
 paymentId : {
    type: String,
    default :""
 },
 payment_status: {
    type : String,
    default : ""
 },
 delivery_address :
 { type :mongoose.Schema.ObjectId,
    ref: 'address'
 },
 subtotalAmt: {
  type: Number,
  default: 0
 },
 totalAmt:{
    total:Number,
    default: 0,

 },
 invoice_receipt :{
 type: String,
 default:""
 },



},{
    timestamps:true
})
const ordermodel = mongoose.model('order',orderSchema )
export  default  ordermodel;