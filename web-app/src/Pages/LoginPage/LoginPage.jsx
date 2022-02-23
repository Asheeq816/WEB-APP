import React from 'react'
import { useState } from 'react'
import './LoginPage.css'
function LoginPage() {

    const [userData, setUserdata] = useState({})
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(userData);
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
                    <button type ="button" >Registration</button>
                    </span>
                    
                </div>
            </form>


        </div>

    )
}

export default LoginPage