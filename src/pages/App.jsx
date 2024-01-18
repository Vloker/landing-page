import './App.css'
import React from 'react'
import Navbar from '../component/navbar/navbar'
import Footers from '../component/footer/footers'
import Subscribe from '../component/Subscribe'

function App() {

  return (
    <>
      <Navbar/>
        <Subscribe/>
      <Footers/>
    </>
  )
}

export default App
