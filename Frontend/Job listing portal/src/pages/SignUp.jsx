import React from 'react'

export default function SignUp() {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" placeholder='Name' />
      <label htmlFor="email">Email</label>
      <input type="text" placeholder='userName'/>
      <label htmlFor="password">Password</label>
      <input type="password" placeholder='password'/>
      <label htmlFor="confirm password">Confirm Password</label>
      <input type="password" placeholder='confirm password'/>

      <button type='submit'>Sign Up</button>

    </div>
  )
}
