import './App.css'
import React from 'react'
import Navbar from '../component/navbar/navbar'
import Footers from '../component/footer/footers'
import Subscribe from '../component/Subscribe'
import CardDestination from '../component/cards/cardDestination'
import CardTrip from '../component/cards/cardTrip'

function App() {

  return (
    <>
      <Navbar/>
        <Subscribe/>
        <div className='flex flex-col gap-10 my-5'>
          <CardDestination/>
          <CardTrip/>
        </div>
      <Footers/>
    </>
  )
}

export default App
