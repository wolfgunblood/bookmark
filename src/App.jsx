import React from 'react';
import "./App.scss"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Tabs from './components/Tabs/Tabs';
import Extension from './components/Extensions/Extension';
import Footer from './components/Footer/Footer';
import CTA from './components/CTA/CTA.JSX';

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Hero />
        <Tabs />
        <Extension />
      </div>
      <div className='app-bottom'>
        <CTA />
        <Footer />

      </div>
    </>
  )
}

export default App