import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const connectdb=()=>{
    mongoose.connect(process.env.Mongo_Uri)
    .then(console.log("connnected to db"))
    .catch((error)=>{
        console.log("error in connecting to db",error)
    })
}
export default connectdb