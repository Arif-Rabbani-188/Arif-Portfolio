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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <SendMail></SendMail>
      <Footer></Footer>
    </div>
  )
}

export default App
