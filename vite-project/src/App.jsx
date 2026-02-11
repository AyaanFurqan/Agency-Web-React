import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import Ourwork from './components/Ourwork'
import Team from './components/Team'
import Contactus from './components/Contactus'


const App = () => {
  const [theme,settheme] = useState(localStorage.getItem('theme') ? 
  localStorage.getItem('theme'): 'light')
  return (
    <div  className='dark:bg-black relative'>
     <Navbar theme={theme} settheme={settheme}/>
     <Hero/>
     <Trustedby/>
     <Services/>
     <Ourwork/>
     <Team/>
     <Contactus/>
    </div>
  )
}

export default App
