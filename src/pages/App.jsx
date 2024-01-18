import './App.css'
import React from 'react'
import Navbar from '../component/navbar/navbar'
import Footers from '../component/footer/footers'
import ButtonSelect from '../component/buttons/buttonSelect'

function App() {

  return (
    <>
      <Navbar/>
      <ButtonSelect text='Find out more' id='btn2'/>
      <ButtonSelect text='Subscribe' id='btn3'/>
      <Footers/>
    </>
  )
}

export default App
