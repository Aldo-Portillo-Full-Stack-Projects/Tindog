import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_LOGIN } from '../redux/authSlice';
import { getUser, logoutUser,getLoginStatus } from '../services/authServices'

export default function UserProfile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = async () => {
    await logoutUser();
    console.log('User logged out')
    await dispatch(SET_LOGIN(false))
    navigate("/login")
  }

  const userData = async () => {
    const user = await getUser();
    console.log(user);
  }
  const userLoggedIn = async() => {
    try{
      const loginStatus = await getLoginStatus()
      console.log(loginStatus)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='profile-page'>
        <button onClick={userLoggedIn}>Get Login Status</button>
        <button onClick={userData}>Log User Data</button>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
