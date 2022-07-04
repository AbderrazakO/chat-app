import React, { useState } from 'react'
import { FilterIcon, SearchIcon, ArrowLeftIcon } from '../../../assets/icons'
import './style.scss'

const SearchBox = () => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className='searchBox'>
      <div className='searchContainer'>
        <button
          aria-label='start searching'
          className={`${isFocused ? `arrowBtn` : `searchBtn`}`}
        >
          {isFocused ? <ArrowLeftIcon /> : <SearchIcon />}
        </button>
        <input
          type='text'
          className='searchInput'
          name='search Input'
          id='searchInput'
          placeholder={`${isFocused ? '' : `Search or start new chat`}`}
          onFocus={() => {
            setIsFocused(true)
          }}
          onBlur={() => {
            setIsFocused(false)
          }}
        />
      </div>
      <button aria-label='filter result' className='filterBtn'>
        <FilterIcon />
      </button>
    </div>
  )
}

export default SearchBox
