import React from 'react'
import { useState } from 'react'
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
function LoginPage() {
    const navigate = useNavigate();
    const [userData, setUserdata] = useState({})
    const handleSubmit = (e)=>{
        e.preventDefault();
        let data = JSON.parse(localStorage.getItem('userData'))
        let findUser = data.find(user => user.email === userData.email && user.password === userData.password)
        if(findUser){
            navigate('/home')
        }
        else{
            alert("Email or password is incorrect. Please try again.")
        }
    }
   const handleChange = (e)=>{
       setUserdata (
           {
           ...userData,
           [e.target.name] : e.target.value
           }
       )
   }
    return (
        <div className='Login-container'>
            <h1>Login</h1>
            <form name = 'form' onSubmit={handleSubmit} >


                <div className='items-container'>

                    <div className='label-container'>
                        <label >Email</label>

                    </div>
                    <div className='input-container'>
                    <input name="email" type="email" required onChange={handleChange} />
                    </div>
                </div>

                <div className='item-container'>

                    <div className='label-container'>
                        <label>Password</label>

                    </div>
                    <div className='input-container'>
                    <input name="password" type="password" required onChange={handleChange} />
                    </div>
                </div>


                <div className='button-container'>
                    <span style={{padding:'5px'}}>
                    <button >Submit</button>
                    </span>
                    <span>
                    <button type ="button" onClick={()=>navigate('/')}>Registration</button>
                    </span>
                    
                </div>
            </form>


        </div>

    )
}

export default LoginPage