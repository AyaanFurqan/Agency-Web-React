import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme,settheme] = useState('light')
  return (
    <div>
     <Navbar theme={theme} settheme={settheme}/>
    </div>
  )
}

export default App
