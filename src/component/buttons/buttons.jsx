import React from 'react'
import './buttons.css'

function Buttons({text}) {
  return (
    <button id='btn1' className='py-1'>{text}</button>
  )
}

export default Buttons