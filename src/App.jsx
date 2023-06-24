import React from 'react';
import "./App.scss"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tabs from './components/Tabs/Tabs';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Tabs />
    </div>
  )
}

export default App