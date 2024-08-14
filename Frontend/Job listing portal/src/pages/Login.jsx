import React, { useState } from "react";
import axios from 'axios';

export default function Login(){
  const[email,setEmail]=useState('');
  const[passowrd,setPassword]=useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{email,passowrd})
    .then(result=>console.log(result))
    .catch(err=> console.log(err))
  };
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="text">Email</label>
      <input type="text" placeholder='userName' onChange={(e)=>setEmail(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="passowrd" onChange={(e)=>setPassword(e.target.value)}/>
      <button type="submit">Login</button>
      </form>
        </div>
    )
}