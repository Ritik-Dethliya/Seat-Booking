import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/signup.css'
function Signup() {
    const navigate=useNavigate()
    const [password,setPassword]=useState("");
    const [name,setName]=useState("")
    const [email,setEmail]=useState("");
    const [role,setRole]=useState("user");
    
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        try {
            let res= await axios.post("http://localhost:8000/user/signup",
                {
                    email,password,name,role
                }
            )
            if(res.status==201){
                console.log("signup Successful ")
                
                navigate('/')
            }
            else{
                console.log("error in signup")
            }
        } catch (error) {
            console.log("Something went wrong during login in ")
        }
        
    }
    return ( 
        <>
            <form onSubmit={handleSubmit} className='Signup'>
            <div className="">
                <h1 className="">Signup</h1>
                <input onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Enter user full name" className="bg-[#9ACBD0] p-2 my-2 w-full font-medium text-gray-900 rounded-lg text-center shadow-lg border-purple-200 "/>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="userEmail" placeholder="Enter email" className="bg-[#9ACBD0] p-2 my-2 w-full font-medium text-gray-900 rounded-lg text-center shadow-lg border-purple-200 "/>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Enter password" className="bg-[#9ACBD0] p-2 my-2 w-full font-medium text-gray-900 rounded-lg text-center shadow-lg border-purple-800"/>
                <select class="">
                    <option value="">select role</option>
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                </select>
                <button type="submit" className="">Signup</button>
            </div>
            </form>
        </>
     );
}

export default Signup;