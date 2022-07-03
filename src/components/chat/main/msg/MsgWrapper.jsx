import React from 'react'
import './style.scss'

const MsgWrapper = ({ userSending = false }) => {
  console.log(userSending)
  return (
    <div
      className='msgWrapper'
      style={{ flexDirection: userSending ? 'row-reverse' : 'row' }}
    >
      <div
        className='none'
        style={{
          clipPath: userSending
            ? `polygon(0% 0%, 0% 10%, 100% 0px)`
            : `polygon(0% 0%, 100% 10%, 100% 0px)`,
          background: userSending ? `#d9fdd3` : `#fff`,
        }}
      ></div>
      <div
        className='msgContainer'
        style={{
          borderRadius: userSending ? `5px 0 5px 5px` : ` 0 5px 5px 5px`,
          background: userSending ? `#d9fdd3` : `#fff`,
        }}
      >
        <div className='msg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          veritatis veniam quas voluptatibus laborum obcaecati necessitatibus id
          totam aliquam repudiandae.
        </div>
        <div className='sendingDate'>8:01 PM</div>
      </div>
    </div>
  )
}

export default MsgWrapper
