import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
if(!process.env.MONGODB_URI)
{
    throw new Error(
    " please provide a valid mongodb  uri"
    )
}
async function connectdb() {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("database is connected")

    }
catch(error)
{ console.log("database connection error" ,error)
 process.exit(1);
}    
}
export default connectdb;
