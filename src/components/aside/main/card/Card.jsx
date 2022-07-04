import React from 'react'
import { UserIcon } from '../../../../assets/icons'
import './style.scss'

const Card = () => {
  return (
    <div className='contactCard'>
      <div className='contactImage'>
        <UserIcon />
      </div>
      <div className='chatInfo'>
        <div className='infoRow'>
          <div className='contactName'>Tarik</div>
          <div className='lastMsgDate'>yesterday</div>
        </div>
        <div className='infoRow'>
          <div className='lastMsg'>jib kheyt byed</div>
        </div>
      </div>
    </div>
  )
}

export default Card
