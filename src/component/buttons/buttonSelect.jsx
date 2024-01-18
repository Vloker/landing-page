import React from 'react'
import './buttonSelect.css'

function ButtonSelect({text, id}) {
  return (
    <button id={id} className='py-3'>{text}</button>
  )
}

export default ButtonSelect