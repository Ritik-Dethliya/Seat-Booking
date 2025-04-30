import e from "express";
import seatsModule from "../modules/seats.module.js";
import cron from 'node-cron'

const seatRouter=e.Router()

seatRouter.get('/get-seats',async(req,res)=>{
    try {
        let seats=(await seatsModule.find())[0]
        res.status(200).send({seats})
    } catch (error) {
        res.status(500).send({"msg":"Something went wrong"})
    }
}
)

seatRouter.post("/book-seats",async(req,res)=>{
    try {
        
        let seattobebook=req.body.seattobebook
        console.log(seattobebook)
        let albookedseat=(await seatsModule.find())[0]
        //console.log(albookedseat)
        albookedseat.bookseats=[...albookedseat.bookseats,...seattobebook]
        albookedseat.save()
        res.status(201).send({"msg":"seat book successfull",albookedseat})
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"Something went wrong"})
    }
})

cron.schedule('*/1 * * * *', async() => {
    try {
        let albookedseat=(await seatsModule.find())[0]
        albookedseat.bookseats=[]
        albookedseat.save()
    } catch (error) {
        console.log(error)
    }
  });
export default seatRouter