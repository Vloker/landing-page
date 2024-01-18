import React from 'react'
import Buttons from '../buttons/buttons'

function Navbar() {
  return (
    <nav>
        <div className='container-xl bg-transparent'>
                <div className='flex justify-between'>
                    <img src="src/assets/img/Logo.png" alt="logos" />
                    <ul className='flex items-center gap-14 text-black'>
                        <li>Destination</li>
                        <li>Hotels</li>
                        <li>Flights</li>
                        <li>Booking</li>
                    </ul>
                    <div id='logins' className='flex gap-4 text-black'>
                        <Buttons text='Login' />
                        <Buttons text='Sign up' />
                    </div>
                </div>
        </div>
    </nav>
  )
}

export default Navbar