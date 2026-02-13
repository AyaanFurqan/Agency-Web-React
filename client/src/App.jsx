import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import Ourwork from './components/Ourwork'
import Team from './components/Team'
import Contactus from './components/Contactus'
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const [theme,settheme] = useState(localStorage.getItem('theme') ? 
  localStorage.getItem('theme'): 'light')
  return (
    <div  className='dark:bg-black relative'>
     <Navbar theme={theme} settheme={settheme}/>
     <Toaster/>
     <Hero/>
     <Trustedby/>
     <Services/>
     <Ourwork/>
     <Team/>
     <Contactus/>
     <Footer theme={theme}/>
    </div>
  )
}

export default App
