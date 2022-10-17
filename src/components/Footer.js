import React from 'react'

export default function Footer({likeProfile, skipProfile}) {
  return (
    <div className='footer-container'>
        <img src = {require("../icons/x-icon.webp")} alt="" onClick={skipProfile}/>
        <img src = {require("../icons/heart-icon.png")} alt="" onClick={likeProfile}/>
    </div>
  )
}
