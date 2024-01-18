import './App.css'
import React from 'react'
import Navbar from '../component/navbar/navbar'
import Footers from '../component/footer/footers'
import Subscribe from '../component/Subscribe'
import CardDestination from '../component/cards/cardDestination'

function App() {

  return (
    <>
      <Navbar/>
        <Subscribe/>
        <CardDestination/>
      <Footers/>
    </>
  )
}

export default App
