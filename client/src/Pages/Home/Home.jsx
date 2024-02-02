import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import About from '../../components/About'
import HeroSection from '../../components/HeroSection'
import Qualities from '../../components/Qualities'
import Menu from '../../components/Menu'
import WhoAreWe from '../../components/WhoAreWe'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <About/>
        <Qualities/>
        <Menu/>
        <WhoAreWe/>
        <Team/>
        <Reservation/>
        <Footer/>
    </>
  )
}

export default Home