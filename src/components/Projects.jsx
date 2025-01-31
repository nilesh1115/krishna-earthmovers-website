import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} // Starts slightly below & faded
      whileInView={{ opacity: 1, y: 0 }} // Slides up smoothly
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
      id='Projects'
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className='text-2xl sm:text-4xl font-bold mb-2 text-center'
      >
        Services <span className='underline underline-offset-4 decoration-1 font-light'>Offers</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        className='text-center text-gray-500 mb-8 max-w-80 mx-auto'
      >
        Tailored Excavation Solutions for Your Unique Needs.
      </motion.p>

      {/* Single Project Display with Side Buttons */}
      <div className='relative flex justify-center items-center'>
        <button onClick={prevProject} className='absolute left-0 p-3 bg-gray-200 rounded-full z-10' aria-label='Previous Project'>
          <img src={assets.left_arrow} alt='Previous' />
        </button>

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          viewport={{ once: true }}
          className="relative w-full max-w-md"
        >
          {/* Image with a dark overlay for better contrast */}
          <div className="relative">
            <motion.img 
              src={projectsData[currentIndex].image} 
              alt={projectsData[currentIndex].title} 
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
          </div>

          {/* Content Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-4 right-4 bottom-6 flex justify-center"
          >
            <div className="bg-white w-11/12 px-6 py-4 rounded-xl shadow-xl text-center">
              <h2 className="text-xl font-bold text-gray-900">{projectsData[currentIndex].title}</h2>
              <p className="text-gray-600 text-sm mb-3">{projectsData[currentIndex].description}</p>
              <a href="#Contact" className='bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition duration-300 hover:bg-orange-700'>
                {projectsData[currentIndex].callToAction}
              </a>
            </div>
          </motion.div>
        </motion.div>

        <button onClick={nextProject} className='absolute right-0 p-3 bg-gray-200 rounded-full z-10' aria-label='Next Project'>
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>
    </motion.div>
  );
};

export default Projects;
