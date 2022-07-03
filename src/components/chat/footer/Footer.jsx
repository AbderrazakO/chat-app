import React from 'react'
import EmojiBtn from './EmojiBtn/EmojiBtn'
import AttachBtn from './AttachBtn/AttachBtn'
import InputText from './InputText/InputText'
import MicBtn from './MicBtn/MicBtn'
import './style.scss'

const Footer = () => {
  return (
    <footer className='textBar'>
      <EmojiBtn />
      <AttachBtn />
      <InputText />
      <MicBtn />
    </footer>
  )
}

export default Footer
