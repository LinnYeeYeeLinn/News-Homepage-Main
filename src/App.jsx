import React, { useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={!toggle ? 'container mx-auto lg:px-10 px-2' : 'container mx-auto lg:px-10 px-2 bg-[rgba(0,0,0,.5)]'}>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Hero />
      <Footer />
    </div>
  )
}

export default App