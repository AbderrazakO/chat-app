import React from 'react'
import { NewChatIcon } from '../../../../assets/icons'

const NewChatBtn = () => {
  return (
    <button aria-label='start new chat' className='headerBtn'>
      <NewChatIcon />
    </button>
  )
}

export default NewChatBtn
