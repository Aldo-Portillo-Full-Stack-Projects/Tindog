import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='signup-page'>
        <h1>Sign Up</h1>
        <form>
            <label for="name">Name:</label>
            <input type="text" required name="name" />
            <label for="email">Email:</label>
            <input type="email" required name="email" />
            <label for="password">Password:</label>
            <input type="password" required name="password" />
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" required name="confirmPassword" />
            <button type='submit'>Sign Up</button>
        </form>
        <h4>Already have an account? <Link to="/login">Login</Link></h4>
    </div>
  )
}
