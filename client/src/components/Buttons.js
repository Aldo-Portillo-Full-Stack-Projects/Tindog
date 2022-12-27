import React from 'react'

export default function Buttons({ id, likeButton, nopeButton}) {
  
  return (
    <div className='button-container'>
        <img src = {require("../icons/x-icon.png")} alt="" onClick={() => nopeButton(id)}/>
        <img src = {require("../icons/heart-icon.png")} alt="" onClick={() => likeButton(id)}/>
    </div>
  )
}
