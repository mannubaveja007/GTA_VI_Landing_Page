import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <div>
        <h2 className="text-3xl font-bold underline">
          Welcome to the world of gta & gsap
        </h2>
      </div>
    </main>
  )
}

export default App