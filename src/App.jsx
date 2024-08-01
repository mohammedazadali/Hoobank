import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Stats from './Component/Stats'
import './index.css'
import Feature from './Component/Feature'
import Billing from './Component/Billing'
import Payment from './Component/Payment'
import Testimonial from './Component/Testimonial'
import Client from './Component/Client'
import Cta from './Component/Cta'
import Footer from './Component/Footer'
const App = () => {
  return (
    <>
    <div className='bg-primary'>
     <Navbar/>
     <Hero/>
     <Stats/>
     <Feature/>
     <Billing/>
     <Payment/>
     <Testimonial/>
     <Client/>
     <Cta/>
     <Footer/>
    </div>
    </>
  )
}

export default App