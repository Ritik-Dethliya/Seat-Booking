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
            let res= await axios.post("https://seat-booking-z5rl.onrender.com/user/login/",
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
            <form onSubmit={handleSubmit} className="login-form">
                <h1 className="login-title">Login</h1>

                <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="userEmail"
                    placeholder="Enter email"
                    className="login-input"
                />

                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="login-input"
                />

                <button type="submit" className="login-button">Login</button>

                <h4 onClick={() => navigate('/signup')} className="login-link">
                    New user? Create an account
                </h4>
            </form>

            
        </>
     );
}

export default Login;