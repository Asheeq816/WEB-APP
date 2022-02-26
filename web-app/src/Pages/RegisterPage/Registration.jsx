import React from 'react'
import { useState } from 'react'
import './Registration.css'
import { useNavigate } from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const [userData, setUserdata] = useState({})
    const handleSubmit = (e)=>{
        e.preventDefault();
        let data = JSON.parse(localStorage.getItem('userData'))
            if(!data){
                data = []
            }
            data.push({
                email: userData.email,
                password: userData.password,
                products: []
            })
        localStorage.setItem('userData', JSON.stringify(data))
        navigate('/login')
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
        <div className='registration-container'>
            <h1>Registration</h1>
            <form name = 'form' onSubmit={handleSubmit} >

                <div className='item-container'>

                    <div className='label-container'>
                        <label >Name</label>

                    </div>
                    <div className='input-container'>
                    <input name="name" type="text" required onChange={handleChange} />
                    </div>
                </div>

                <div className='item-container'>

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

                <div className='item-container'>

                    <div className='label-container'>
                        <label >Place</label>

                    </div>
                    <div className='input-container'>
                    <input name="place" type="text" required onChange={handleChange} />
                    </div>
                </div>

                <div className='button-container'>
                    <span style={{padding:'5px'}}>
                    <button >Submit</button>
                    </span>
                    <span>
                    <button type='reset'>Clear</button>
                    </span>
                    
                </div>
            </form>


        </div>

    )
}

export default Registration