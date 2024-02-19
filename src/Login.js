import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState({})

    const navigate = useNavigate()

    function Login(){
        let obj = {};

        if(password.length === 0){
            obj.password = "Please enter password"
        }

        if(email.length === 0){
            obj.email = "Please enter email"
        }

        if(Object.keys(obj).length === 0){
            if(email === 'training@jalaacademy.com' && 
            password === 'jobprogram'){
                navigate('/dashboard')
            }else{
                
            }
        }else{
            setError(obj)
        }
    }


  return (
    <div style={{backgroundColor:'#D2D6DE' , margin:0, padding:0, height:'100%', width:'100%', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <h1>JALA Academy</h1>
            <h3>Use the below details to login</h3>
            <p>Email: training@jalaacademy.com</p>
            <p>Password: jobprogram</p>
            <div style={{backgroundColor:'yellow', margin:5}}>
                <h4>Learn everything on Real-Time Scenarios. FREE for all.</h4>
            </div>
        </div>
        <div style={{height:400, width:400, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', backgroundColor:'white'}}>
            <p>Sign In</p>
            <input onChange={(e)=>setEmail(e.target.value)} style={{width:300 , height:25, marginBottom:20}} placeholder='Email or Mobile No'/>
            {error?.email && <p style={{color:'red'}}>{error?.email}</p>}
            <input onChange={(e)=>setPassword(e.target.value)} style={{width:300 , height:25, marginBottom:20}} placeholder='Password'/>
            {error?.password && <p style={{color:'red'}}>{error?.password}</p>}
            <button style={{backgroundColor:'#4284f5', height:30, width:80}} onClick={()=>Login(0)}>Login</button>
        </div>
        <div style={{backgroundColor:'#3C8DBC', width:'80%' , margin:50}}>
            <p>JALA Academy offers Job Guaranteed Programs for Freshers to 12 years’ experience on Full Stack Development / Automation Testing / Dev-Ops / QA/ SDET/Cyber Security / RPA / Cloud Technologies. Training would be completely on live Project scenarios Read our website JALA Academy for more details : https://jalaacademy.com/</p>
        </div>
    </div>
  )
}
