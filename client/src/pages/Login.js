import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser, validateEmail} from '../services/authServices'
import { useDispatch } from 'react-redux'
import { SET_LOGIN } from '../redux/authSlice'

const initialState = {
    email: "",
    password: "",
}

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setFormData] = React.useState(initialState)
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
          await loginUser(userData)
          await dispatch(SET_LOGIN(true))
          navigate("/swipe")
        } catch (err) {
          console.log(err)
        }
      } 
  return (
    <div className='login-register-page'>
        <img src={require("../icons/firePaw.png")} alt=""/>
        <h2>Welcome Back!</h2>
        <form onSubmit={login}>
            <label htmlFor="email">Email:</label>
            <input type="text" required name="email" value={email} onChange={handleInputChange}/>
            <label htmlFor="password">Password:</label>
            <input type="password" required name="password" value={password} onChange={handleInputChange} autoComplete="on"/>
            <button type='submit'>Login</button>
        </form>
        <h4>Dont have an account? <Link to="/signup">Sign Up</Link></h4>
    </div>
  )
}
