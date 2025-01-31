import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const About = () => {
  return (
    <div 
      className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden text-center' 
      id='About'
    >
      {/* Heading & Subtitle - Centered & Pop-Up from Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }} // Small and faded
        whileInView={{ opacity: 1, scale: 1 }} // Expands and becomes visible
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center"
      >
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>
          Why Choose <span className='underline underline-offset-4 decoration-1 font-light'>Krishna Earthmovers</span>
        </h1>
        <p className='text-gray-500 max-w-xl text-center mb-8'>
          We provide reliable excavator services <br />for construction and excavation projects.
        </p>
      </motion.div>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        
        {/* Image Animation - Comes from Left */}
        <motion.img 
          src={assets.brand_img} 
          alt="Excavator" 
          className='w-full sm:w-1/2 max-w-lg'
          initial={{ opacity: 0, x: -200 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true, amount: 0.3 }}
        />

        {/* ✅ Text Animation - Comes from Right */}
        <motion.div 
          className='flex flex-col items-center md:items-start mt-10 text-gray-600'
          initial={{ opacity: 0, x: 200 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }} 
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>15+</p>
              <p>Years of Trusted Service</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>280+</p>
              <p>Farm Wells Dug</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>130+</p>
              <p>Farm Ponds Successfully Completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Major Excavation Projects Delivered On-Time</p>
            </div>
          </div>
          <p className='my-10 max-w-lg'>
            Krishna Earthmovers provides reliable excavator rental services for farm well digging, ponds, and all other excavation needs. We focus on quality, precision, and timely project delivery to ensure 100% customer satisfaction.
          </p>
          <a href="#Contact" className='bg-amber-500 text-white px-8 py-2 rounded-full'>Learn More</a>
        </motion.div>
      </div>
    </div>
  )
}

export default About
