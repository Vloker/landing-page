import React from 'react'
import './cardTrip.css'

function CardTrip() {
  return (
    <div id='cardTrip' className='flex flex-col'>

        <div className='flex justify-center'>   
            <img src="src/assets/img/Rectangle 17.png" id="imageTrip" />
        </div>

        <div id='infoTrip'>
            <div className='flex flex-col gap-y-5'>
                <div className='flex flex-col gap-y-2 items-start'>
                    <p className='font-semibold text-lg'>Trip To Grecee</p>
                    <div className='flex gap-2 text-lightgray'>
                        <a>14-29 June</a><span>|</span><a>by Robbin joseph</a>
                    </div>
                </div>

                <ul className='flex gap-4 items-center'>
                    <li className='w-9 h-9 rounded-full bg-gray flex items-center justify-center'>
                        <img src="src/assets/icons/leaf 1.svg"/>
                    </li>
                    <li className='w-9 h-9 rounded-full bg-gray flex items-center justify-center'>
                        <img src="src/assets/icons/map 1.svg"/>
                    </li>
                    <li className='w-9 h-9 rounded-full bg-gray flex items-center justify-center'>
                        <img src="src/assets/icons/send 2.svg"/>
                    </li>
                </ul>

                <div className='flex items-center gap-2'>
                    <img src="src/assets/icons/building 1.svg"/>
                    <p className='text-lightgray'>24 people going</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CardTrip