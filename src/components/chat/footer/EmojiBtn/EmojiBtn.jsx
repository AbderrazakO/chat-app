import React, { useState } from 'react'
import { XIcon, FaceIcon, GifIcon, StickerIcon } from '../../../../assets/icons'
import './style.scss'

const EmojiBtn = () => {
  const [isHidden, setIsHidden] = useState(true)
  // console.log(isHidden)

  return (
    <div
      className='stickContainer'
      style={{ width: isHidden ? '27px' : 'max-content' }}
    >
      <button
        aria-label='close'
        className='pickBtn'
        onClick={() => {
          setIsHidden(true)
        }}
        style={{ display: isHidden ? 'none' : 'block' }}
      >
        <XIcon />
      </button>
      <button
        aria-label='emojis'
        className='pickBtn'
        onClick={() => {
          setIsHidden(false)
        }}
      >
        <FaceIcon />
      </button>
      <button aria-label='gifs' className='pickBtn'>
        <GifIcon />
      </button>
      <button aria-label='stickers' className='pickBtn'>
        <StickerIcon />
      </button>
    </div>
  )
}

export default EmojiBtn
