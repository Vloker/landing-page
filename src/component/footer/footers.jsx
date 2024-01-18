import React from 'react'

function Footers() {
  return (
    <footer>
    <div className='container-xl'>
        <div className='flex justify-around items-center'>
            <div className='flex flex-col gap-3'>
                <p className='m-0 text-4xl text-left'>Jadoo.</p>
                <p className='m-0 text-xs text-left'>Book your trip in minute, get full<br/>Control for much longer.</p>
            </div>
            <div className='flex justify-between gap-10'>   
                <div className='flex flex-col gap-3'>
                    <p className='m-0 text-sm font-bold'>Company</p>
                    <ul className='m-0 text-xs text-left flex flex-col gap-1'>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='m-0 text-sm font-bold'>Contact</p>
                    <ul className='m-0 text-xs text-left flex flex-col gap-1'>
                        <li>Help/FAQ</li>
                        <li>Press</li>
                        <li>Affilates</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='m-0 text-sm font-bold'>More</p>
                    <ul className='m-0 text-xs text-left flex flex-col gap-1'>
                        <li>Airlinefees</li>
                        <li>Airline</li>
                        <li>Low fare tips</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='flex items-center'>
                    <img src="src/assets/icons/Social.svg" alt="" />
                    <div className='bg-black flex w-10 h-10 items-center justify-center rounded-full'>
                        <img src="src/assets/icons/instagram 1.svg" alt="" />
                    </div>
                    <img src="src/assets/icons/Social (1).svg" alt="" />
                </div>
                <p className='m-0 text-xl'>Discover our app</p>
                <div>
                    <button className='bg-black items-center justify-center rounded-2xl flex p-2 w-32 gap-2'>
                        <img src="src/assets/img/google-play 1.png" alt="playstore" />
                        <img src="src/assets/img/Vector.png" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </div>
    </footer>
  )
}

export default Footers