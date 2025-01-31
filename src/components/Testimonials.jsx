import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Start from the right
      whileInView={{ opacity: 1, x: 0 }} // Slide in smoothly
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
      id='Testimonials'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
        Real Experiences from Our Happy Clients
      </p>
      
      <div className='flex flex-wrap justify-center gap-8'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }} 
            viewport={{ once: true }}
            className='max-w-[340px] shadow-lg rounded px-8 py-12 text-center'
          >
            <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
            <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
            <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
            <div className='flex justify-center gap-1 text-red-500 mb-4'>
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={assets.star_icon} alt='' />
              ))}
            </div>
            <p className='text-gray-600'>{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;
