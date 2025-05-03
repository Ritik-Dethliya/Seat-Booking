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
            let res= await axios.post("https://seat-booking-z5rl.onrender.com/user/signup",
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
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="signup-container">
                    <h1 className="signup-title">Signup</h1>

                    <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    className="signup-input"
                    />

                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="userEmail"
                    placeholder="Enter email"
                    className="signup-input"
                    />

                    <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="signup-input"
                    />

                    <select className="signup-select">
                    <option value="">Select role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                    </select>

                    <button type="submit" className="signup-button">Signup</button>
                </div>
            </form>

        </>
     );
}

export default Signup;