import React from 'react'
import './cardDestination.css'

function CardDestination() {
  return (
    <div id='card' className='flex flex-col relative'>
      <img src="src/assets/img/bbb.jpg" id="imageDestination" />
      <div className='flex flex-col gap-5 z-10 absolute py-3 px-5' id='infoDestination'>
          <div className='flex justify-between'>
            <a>Rome,Italy</a>
            <span className='flex gap-1'>$<p>5,42k</p></span>
          </div>
          <div className='flex gap-2 items-center'>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="navigation 1">
                <g id="Navigation">
                <path 
                  id="Vector" 
                  d="M18.0682 2.76033L11.1932 17.7603C11.1357 17.886 11.0381 17.989 10.9158 18.0533C10.7935 18.1177 10.6533 18.1396 10.5172 18.1158C10.3811 18.092 10.2567 18.0237 10.1635 17.9217C10.0703 17.8197 10.0135 17.6896 10.0021 17.5519L9.42083 10.579L2.44789 9.99771C2.31017 9.98627 2.18013 9.92951 2.0781 9.8363C1.97607 9.7431 1.90781 9.61871 1.88399 9.48258C1.86017 9.34646 1.88213 9.20628 1.94645 9.08397C2.01077 8.96166 2.11381 8.86411 2.23945 8.80658L17.2395 1.93158C17.3554 1.87844 17.4849 1.86205 17.6104 1.88461C17.736 1.90718 17.8516 1.96762 17.9418 2.05781C18.032 2.14801 18.0924 2.26365 18.115 2.38919C18.1375 2.51474 18.1212 2.64418 18.068 2.76014L18.0682 2.76033Z" 
                  fill="#080809"/>
                </g>
              </g>
            </svg>
            <span className='flex gap-1'><p>10</p>Days Trip</span>
          </div>
        </div>
    </div>
  )
}

export default CardDestination