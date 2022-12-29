import React from 'react'
import { Link } from 'react-router-dom'
import { loginUser, validateEmail} from '../services/authServices'

export default function Login() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
      })
    const {email, password} = formData

      const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
      }
    
      const login = async (e) => {
        e.preventDefault();
    
        if( !email || !password){
          console.log("All fields are required")
        }
    
        if(!validateEmail(email)){
          console.log("Please enter a valid email")
        }
    
        const userData = { email, password
        }
    
        try {
          const data = await loginUser(userData)
          console.log(data);
        } catch (err) {
          console.log(err)
        }
      } 
  return (
    <div className='login-page'>
        <h1>Login</h1>
        <form onSubmit={login}>
            <label htmlFor="email">Email:</label>
            <input type="email" required name="email" value={email} onChange={handleInputChange}/>
            <label htmlFor="password">Password:</label>
            <input type="password" required name="password" value={password} onChange={handleInputChange} autoComplete="on"/>
            <button type='submit'>Login</button>
        </form>
        <h4>Dont have an account? <Link to="/signup">Sign Up</Link></h4>
    </div>
  )
}
