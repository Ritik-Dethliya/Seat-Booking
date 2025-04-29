import mongoose from 'mongoose'

const seatSchema=mongoose.Schema({
    bookseats:[{type:Number}],
})
export default mongoose.model("seat",seatSchema);