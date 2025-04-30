import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../styles/login.css'
import { useState } from 'react';
function Login() {
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        //console.log(password,email)
        try {
            let res= await axios.post("http://localhost:8000/user/login/",
                {
                    email,password
                }
            )
            let {token}=res.data
            console.log(res.data)
            if(token){
                localStorage.setItem("token",token)
                console.log(res.data)
                navigate("/home")
            }
            else{
                console.log("token not present")
            }
        } catch (error) {
            console.log(error)
            console.log("Something went wrong during login in ")
        }
        
    }
    return ( 
        <>
            <form onSubmit={handleSubmit} className="loginform">
                <h1 className="">Login</h1>
                <input onChange={(e)=>setEmail(e.target.value)} type="email" name="userEmail" placeholder="Enter email" className="bg-[#9ACBD0] p-2 my-2 w-full font-medium text-gray-900 rounded-lg text-center shadow-lg border-purple-200 "/>
                <input onChange={(e)=>setPassword(e.target.value)} type="text" name="password" placeholder="Enter password" className="bg-[#9ACBD0] p-2 my-2 w-full font-medium text-gray-900 rounded-lg text-center shadow-lg border-purple-800"/>
                
                <button type="submit" className="">Login</button>
                <h4 onClick={()=>navigate('/signup')}>New User</h4>
            </form>
            
            
        </>
     );
}

export default Login;