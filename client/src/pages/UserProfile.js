import React from 'react'
import { getUser, logoutUser } from '../services/authServices'

export default function UserProfile() {
    console.log(getUser)
  return (
    <div className='profile-page'>
        <button onClick={logoutUser}>Logout</button>
    </div>
  )
}
