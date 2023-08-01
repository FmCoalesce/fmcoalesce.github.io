import React from 'react'
import { Home } from "./pages/Home"
import Projects from './pages/Projects/Projects'
import About from './components/about/About'
import  Resume  from './pages/Resume/Resume'
import { ThemeToggle } from './components/theme/ThemeToggle'
import { LangSwitch } from './components/lang/LangSwitch'
import Mouse from './components/content/Mouse'

export default function Main() {
  return (
    <div className='main'>
         <ThemeToggle />
         <LangSwitch />
          <Home/>
          <About/>
          <Projects/>
          <Resume/>
          <Mouse/>
    </div>
  )
}
