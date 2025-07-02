import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import SendMail from './Component/SendMail'
import Footer from './Component/Footer'
import Education from './Component/Education'
import AboutMe from './Component/AboutMe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <SendMail></SendMail>
      <Footer></Footer>
    </div>
  )
}

export default App
