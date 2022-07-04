import React, { useState } from 'react'
import { AttachIcon, GalleryIcon } from '../../../../assets/icons'
import './style.scss'

const AttachBtn = () => {
  const [isShowed, setIsShowed] = useState(false)

  return (
    <div className='attachAria'>
      <button
        aria-label=''
        className='mainBtn'
        onClick={() => {
          setIsShowed(isShowed ? false : true)
        }}
        style={{
          background: isShowed ? '#d8d8d8' : 'none',
        }}
      >
        <AttachIcon />
      </button>
      <nav
        className={`dropDown`}
        style={{ display: isShowed ? 'flex' : 'none' }}
      >
        <button aria-label='' className='attachBtn'>
          <GalleryIcon />
        </button>
        <button aria-label='' className='attachBtn'>
          <GalleryIcon />
        </button>
        <button aria-label='' className='attachBtn'>
          <GalleryIcon />
        </button>
        <button aria-label='' className='attachBtn'>
          <GalleryIcon />
        </button>
      </nav>
    </div>
  )
}

export default AttachBtn
