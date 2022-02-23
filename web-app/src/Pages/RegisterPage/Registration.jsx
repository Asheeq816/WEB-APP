import React from 'react'
import { useState } from 'react'
import './Registration.css'
function Registration() {

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