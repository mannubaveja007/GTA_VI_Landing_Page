import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar';
import FirstVideo from './sections/FirstVideo';
import Jason from './sections/Jason';
import Lucia from './sections/Lucia';
import SecondVideo from './sections/SecondVideo';
import PostCard from './sections/PostCard';
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <FirstVideo />
      <Jason></Jason>
      <SecondVideo></SecondVideo>
      <Lucia></Lucia>
      <PostCard></PostCard>
    </main>
  )
}

export default App