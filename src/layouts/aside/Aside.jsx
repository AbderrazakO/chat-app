import React from 'react'
import Header from '../../components/aside/header/Header'
import Search from '../../components/aside/searchBox/SearchBox'
import Main from '../../components/aside/main/Main'

const Aside = () => {
  return (
    <aside>
      <Header />
      <Search />
      <Main />
    </aside>
  )
}

export default Aside
