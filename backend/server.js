import e from "express";
import connectdb from "./db.config.js";
import seatRouter from "./routers/seatBooking.router.js";
import cors from 'cors'
import corn from 'node-cron'
import userRouter from "./routers/user.router.js";

connectdb()
const app=e()
app.use(cors())
app.use(e.json())
app.use('/user',userRouter)
app.use('/seats',seatRouter)
app.listen(8000,()=>{
    console.log("Server running on 8000")
})