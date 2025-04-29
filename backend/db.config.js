import mongoose from "mongoose";
const connectdb=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(console.log("connnected to db"))
    .catch((error)=>{
        console.log("error in connecting to db",error)
    })
}
export default connectdb