import React from 'react'

export default function Footer({decisionButton, id}) {
  
  return (
    <div className='footer-container'>
        <img src = {require("../icons/x-icon.webp")} alt="" onClick={() => decisionButton(id, false)}/>
        <img src = {require("../icons/heart-icon.png")} alt="" onClick={() => decisionButton(id, true)}/>
    </div>
  )
}
