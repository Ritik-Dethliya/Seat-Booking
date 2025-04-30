import { useEffect, useState } from 'react'
import '../styles/coach.css'
function Coach() {
    let seatsarray=new Array(80).fill(1)
    const [seats,setseats]=useState(seatsarray)
    const [Bookseat,setBookseat]=useState([])
    const [seatToBeBook,setseatToBeBook]=useState(0)

    const getBookedSeat=async()=>{
        let res=await fetch("https://seat-booking-z5rl.onrender.com/seats/get-seats")
        let data=await res.json()
        console.log(data.seats.bookseats)
        setBookseat(prev=>[...prev,...data.seats.bookseats])
    }

    const sendTobackend=async(Bookseats)=>{
        let res=await fetch("https://seat-booking-z5rl.onrender.com/seats/book-seats",{
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
        if(n>7)return alert("cannot book more that seven seat")
        let rpoint=1,lpoint=1
        let Bookseats=[]
        let found=false
        while(rpoint<=80){
            if(Bookseat.includes(rpoint)){
               rpoint++
               lpoint=rpoint
           }
          
           else if((rpoint-lpoint+1)==n){
            console.log(lpoint,rpoint)
               found=true
               for(let i=lpoint;i<=rpoint;i++){
                Bookseats.push(i)
               }
                sendTobackend(Bookseats)
               break
           }
           else if(rpoint%7==0){
                console.log("rpoint to be %7==0",rpoint)
                rpoint=rpoint+1
                lpoint=rpoint
            
                //console.log(lpoint,rpoint)
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
            <h1 style={
                {
                    width:"100%",
                    textAlign:'center'
                }
                }>Book Seats</h1>
            <div className="conatiner">
                <div className="coach-conatiner">
                    {seats.map((seats,index)=>(
                        <div key={index} className={`seats ${Bookseat.includes(index+1)?"booked":""}`}>{index+1}</div>
                    ))}
                </div>

                <div className="bookseatform">
                    <input type="Number" 
                        placeholder='Enter Number of Seat'
                        onChange={
                            (e)=>setseatToBeBook(Number(e.target.value))
                            } 
                    />
                    <button onClick={()=>{
                        console.log(seatToBeBook)
                        bookSeats(seatToBeBook)
                    }
                        
                    }>Book seat</button>
                </div>
                
            </div>
        </>
    );
}

export default Coach;