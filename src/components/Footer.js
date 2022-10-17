import React from 'react'

export default function Footer({likeProfile, skipProfile, id}) {
  console.log('id from footer: ' + id)
  return (
    <div className='footer-container'>
        <img src = {require("../icons/x-icon.webp")} alt="" onClick={() => likeProfile(id, false)}/>
        <img src = {require("../icons/heart-icon.png")} alt="" onClick={() => likeProfile(id, true)}/>
    </div>
  )
}
