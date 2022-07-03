import React from 'react'
import MsgWrapper from './msg/MsgWrapper'
import './style.scss'

const MainChat = () => {
  return (
    <div className='mainChat'>
      <MsgWrapper />
      <MsgWrapper userSending={true} />
      <MsgWrapper />
    </div>
  )
}

export default MainChat
