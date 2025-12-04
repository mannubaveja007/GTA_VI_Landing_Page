import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <FirstVideo />
      <Jason></Jason>
    </main>
  )
}

export default App