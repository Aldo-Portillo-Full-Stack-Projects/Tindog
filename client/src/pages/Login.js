import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login-page'>
        <h1>Login</h1>
        <form>
            <label for="email">Email:</label>
            <input type="email" required name="email" />
            <label for="password">Password:</label>
            <input type="password" required name="password" />
            <button type='submit'>Login</button>
        </form>
        <h4>Dont have an account? <Link to="/signup">Sign Up</Link></h4>
    </div>
  )
}
