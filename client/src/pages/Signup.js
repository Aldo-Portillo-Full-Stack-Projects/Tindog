import React from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../services/authServices'

export default function Signup() {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    const {name, email, password, confirmPassword} = formData


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const register = async (e) => {
        e.preventDefault();

        if( !name || !email || !password || !confirmPassword){
            console.log("All fields are required")
        }

        //Missing passwords match

        const userData = {name, email, password, confirmPassword}

        try{
            const data = await registerUser(userData)
            console.log(data)
        } catch(err){
            console.log(err);
        }

    }
  return (
    <div className='signup-page'>
        <h1>Sign Up</h1>
        <form onSubmit={register}>
            <label htmlFor="name">Name:</label>
            <input type="text" required name="name" value={name} onChange={handleInputChange}/>
            <label htmlFor="email">Email:</label>
            <input type="email" required name="email" value={email} onChange={handleInputChange}/>
            <label htmlFor="password">Password:</label>
            <input type="password" required name="password" autoComplete='on' value={password} onChange={handleInputChange}/>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" required name="confirmPassword" autoComplete='on' value={confirmPassword} onChange={handleInputChange}/>
            <button type='submit'>Sign Up</button>
        </form>
        <h4>Already have an account? <Link to="/login">Login</Link></h4>
    </div>
  )
}
