import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar';
import FirstVideo from './sections/FirstVideo';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <FirstVideo />
    </main>
  )
}

export default App