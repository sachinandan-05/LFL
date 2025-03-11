import React from 'react'
import { NavBar } from '../../components/layout/NavBar'
import { Hero } from '../../components/layout/Hero'
import { About } from '../../components/layout/About'
import { HowItWorks } from '../../components/layout/HowItWork'
import { Footer } from '../../components/layout/Footer'
const HomePage = () => {
    return (
        <div className=''>
            <NavBar/>
            <Hero/>      
            <HowItWorks/>
            <About/>
            <Footer/>
        </div>
    )
}

export default HomePage
