import { useEffect, useState } from 'react'
import '../styles/coach.css'
function Coach() {
    let seatsarray=new Array(80).fill(1)
    const [seats,setseats]=useState(seatsarray)
    const [Bookseat,setBookseat]=useState([])

    const getBookedSeat=async()=>{
        let res=await fetch("http://localhost:8000/seats/get-seats")
        let data=await res.json()
        console.log(data.seats.bookseats)
        setBookseat(prev=>[...prev,...data.seats.bookseats])
    }

    const sendTobackend=async(Bookseats)=>{
        let res=await fetch("http://localhost:8000/seats/book-seats",{
            method:"Post",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ seattobebook:Bookseats})
        })
        let data=await res.json()
        console.log(data.albookedseat.bookseats)
        setBookseat((prev)=>[...prev,...data.albookedseat.bookseats])
    }

    useEffect(()=>{
        getBookedSeat()
    },[])
    async function bookSeats(n){
        if(seattobebook>7)return console.log("cannot book seven seat")
        let rpoint=1,lpoint=1
        let Bookseats=[]
        let found=false
        while(rpoint<80){
            if(Bookseat.includes(rpoint)){
               rpoint++
               lpoint=rpoint
           }
           
           else if((rpoint-lpoint+1)==n){
               found=true
               for(let i=lpoint;i<=rpoint;i++){
                Bookseats.push(i)
               }
                sendTobackend(Bookseats)
               break
           }
           else if(rpoint%7==0){
            rpoint++
            lpoint=rpoint
           }
           else{
               rpoint++
           }
       }
       

       if (!found) {
        const available = [];
        for (let i = 1; i <= 80; i++) {
            if (!Bookseat.includes(i)) available.push(i);
        }

        if (available.length < n) {
            console.log("Not enough seats");
            return;
        }

        let minDist = Infinity;
        let seatsToBook=[]
        for (let i = 0; i <= available.length - n; i++) {
            const group = available.slice(i, i + n);
            const dist = group[n - 1] - group[0]; 
            if (dist < minDist) {
                minDist = dist;
                seatsToBook = group;
                found = true;
            }
        }
        if(found){
            console.log(seatsToBook)
            sendTobackend(seatsToBook)
           
        }
        else{
            console.log("no seat found")
        }
        
    }

    

    }
    return ( 
        <>
            <div className="coach-conatiner">
                {seats.map((seats,index)=>(
                    <div key={index} className={`seats ${Bookseat.includes(index+1)?"booked":""}`}>{index+1}</div>
                ))}
            </div>
            <input type="Number" onChange={(e)=>setseattobebook(Number(e.target.value))} />
            <button onClick={()=>{
                console.log(seattobebook)
                bookSeats(seattobebook)
            }
                
            }>Book seat</button>
        </>
    );
}

export default Coach;