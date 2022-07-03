import React from 'react'
import { FilterIcon, SearchIcon } from './icons'
import './style.scss'

const SearchBox = () => {
  return (
    <div className='searchBox'>
      <div className='searchContainer'>
        <button>
          <SearchIcon />
        </button>
        <input
          type='text'
          className='searchInput'
          name=''
          id=''
          // placeholder='Search or start new chat'
        />
      </div>
      <button className='filterBtn'>
        <FilterIcon />
      </button>
    </div>
  )
}

export default SearchBox
