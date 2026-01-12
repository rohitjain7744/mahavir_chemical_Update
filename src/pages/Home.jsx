import React from 'react'
import Hero from "../components/Hero/Hero.jsx"
import About from "../components/Home/About.jsx"
import SpecialityChemicals from '../components/Home/Specialchemical.jsx'
import OurVision from '../components/Home/Ourvision.jsx'
import OurDivisions from '../components/Home/OurDivisions.jsx'
import Contact from '../components/Contact/Contact.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <SpecialityChemicals/>
      <OurVision/>
      <OurDivisions/>
      <Contact/>
    </div>
  )
}

export default Home
