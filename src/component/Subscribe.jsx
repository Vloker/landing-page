import React from 'react'
import InputEmail from './input/inputEmail'
import ButtonSelect from './buttons/buttonSelect'

function Subscribe() {
  return (
    <div className='flex items-center gap-4'>
        <InputEmail/>
        <ButtonSelect text='Subscribe' id='btn3'/>
  </div>
  )
}

export default Subscribe