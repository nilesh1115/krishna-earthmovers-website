import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  
  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return ()=>{
      document.body.style.overflow='auto'
    };

  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-0'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
      <img 
  className="hidden md:block bg-white rounded-xl  shadow-md border border-gray-200" 
  src={assets.logoe} 
  alt="Logo"
  style={{
    padding: '0.25rem 0.5rem', // Reduced top/bottom padding (height control)
    maxHeight: '80px',         // Adjust this to control overall height
    maxWidth: 'fit-content',   // Ensures the width adjusts to the content
    display: 'inline-block',   // Keeps the container tight around the logo
  }}
/>

        <ul className=' bg-white text-gray-900 px-6 py-2 rounded-4xl hidden md:flex gap-7 text-color-white hover:bg-amber-500 transition'>
          <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Services</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>

        </ul>
        <a href="#Contact" className='bg-white text-gray-900 px-6 py-2 rounded-2xl hover:bg-amber-500 transition'>Enquiry now</a>
        {/*<button href="#Contact" className='cursor-pointer hover:text-gray-400 hidden md:block bg-white px-8 py-2 rounded-full'>Enquiry now</button>*/}
        <img onClick={()=>setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
      </div>
      {/*----------- mobile-menu--------*/}
      <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-auto bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
          <img onClick={()=>setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <a onClick={()=>setShowMobileMenu(false)} href="#Header" className='px-4 py2 rounded-b-full inline-block'>Home</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#About" className='px-4 py2 rounded-b-full inline-block'>About</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Projects" className='px-4 py2 rounded-b-full inline-block'>Services</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Testimonils" className='px-4 py2 rounded-b-full inline-block'>Testimonials</a>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
