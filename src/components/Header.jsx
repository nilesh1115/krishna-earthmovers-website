import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"
const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage:"url('/bg.png')"}} id='Header'>
      <Navbar/>
      <motion.div 
      initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32'>
        <h2 className='text-3xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 shadow-lg text-white  '>
        Trusted Excavation Solutions for Precision and Efficiency
        </h2>
        <div className='space-x-6 mt-16'>
          <a href="#Projects" className='bg-white px-8 py-3 rounded-4xl hover:bg-amber-500 transition' >Services</a>
          <a href="#Contact" className='bg-white px-8 py-3 rounded-4xl hover:bg-amber-500 transition' >Call Now</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
