import React from 'react'

export default function Footer({ id, likeButton, nopeButton}) {
  
  return (
    <div className='footer-container'>
        <img src = {require("../icons/x-icon.png")} alt="" onClick={() => nopeButton(id)}/>
        <img src = {require("../icons/heart-icon.png")} alt="" onClick={() => likeButton(id)}/>
    </div>
  )
}
