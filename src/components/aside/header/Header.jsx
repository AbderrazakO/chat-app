import React from 'react'
import DarkBtn from './darkBtn/DarkBtn'
import MenuBtn from './menuBtn/MenuBtn'
import NewChatBtn from './newChatBtn/NewChatBtn'
import { UserIcon } from '../../../assets/icons'
import './style.scss'

const Header = () => {
  return (
    <header className='asideHeader'>
      <button aria-label='go to profile' className='userImage'>
        <UserIcon />
      </button>
      <nav>
        <DarkBtn />
        <NewChatBtn />
        <MenuBtn />
      </nav>
    </header>
  )
}

export default Header
