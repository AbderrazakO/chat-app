import React, { useState, useEffect } from 'react'
import { DarkModeIcon } from '../../../../assets/icons'

const DarkBtn = () => {
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [isDark, setIsDark] = useState(defaultTheme)

  //
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark ? 'dark' : 'light'
    )
  }, [isDark])

  //
  return (
    <button
      aria-label='dark mode button'
      className='headerBtn'
      onClick={() => {
        setIsDark(isDark ? false : true)
      }}
    >
      <DarkModeIcon />
    </button>
  )
}

export default DarkBtn
