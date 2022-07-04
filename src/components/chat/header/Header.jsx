import React from 'react'
import { UserIcon } from '../../../assets/icons'
import './style.scss'

const ContactDetails = () => {
  return (
    <header className='contactDetails'>
      <div className='contactImg'>
        <UserIcon />
      </div>
      <div className='contactName'>Lorem ipsum</div>
    </header>
  )
}

export default ContactDetails
