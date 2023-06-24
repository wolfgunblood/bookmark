import React from 'react';
import "./App.scss"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tabs from './components/Tabs/Tabs';
import Extension from './components/Extensions/Extension';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Tabs />
      <Extension />
    </div>
  )
}

export default App