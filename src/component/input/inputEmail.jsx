import React from 'react'
import './inputEmail.css'

function InputEmail({value}) {
  return (
    <div id='inputemail' className='flex py-3 px-5'>
        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 46">
            <path id="Vector 5" d="M4 6L9.4 10.05C9.75556 10.3167 10.2444 10.3167 10.6 10.05L16 6" stroke="#39425D" strokeLinecap="round"/>
            <rect id="Rectangle 22" x="0.5" y="0.5" width="20" height="17" rx="4.5" stroke="#39425D"/>
            </g>
        </svg>
        <input 
            type="email" 
            placeholder="Your email"
            value={value}
            name='email'
            className='flex items-center'
            id='email'/>
    </div>
  )
}

export default InputEmail