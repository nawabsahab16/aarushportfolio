import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Education from './components/education'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id="home">
          <Home />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="services">
             <Services />
          </div>

          <div id="education" >
            <Education />
          </div>
      </main>
    </div>
  )
}

export default App