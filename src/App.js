import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import HeadCards from './components/HeadCards'
import Food from './components/Food'
import Category from './components/Category'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <HeadCards/>
      <Food/>
      <Category/>
    </div>
  )
}

export default App
