import React, { useState } from 'react'
import './style.scss'

const InputText = () => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <input
        className='chatInput'
        type='text'
        name='chat Input'
        id='chatInput'
        placeholder={`${isFocused ? '' : `Type a message`}`}
        onFocus={() => {
          setIsFocused(true)
        }}
        onBlur={() => {
          setIsFocused(false)
        }}
      />
    </>
  )
}

export default InputText
