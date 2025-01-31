import React from 'react';
import { assets } from '../assets/assets';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-amber-500 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between gap-8'>
        {/* Logo and Description Section */}
        <div className='w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center md:items-start'>
          <img
            className="bg-white rounded-xl shadow-md border border-gray-200"
            src={assets.logoe}
            alt="Logo"
            style={{
              padding: '0.25rem 0.5rem',
              maxHeight: '80px',
              maxWidth: 'fit-content',
              display: 'inline-block',
            }}
          />
          <p className='text-gray-200 mt-4 text-center md:text-left'>
          Precision Excavation Services You Can Trust
          </p>

          {/* Social Media Icons */}
          <div className='flex gap-4 mt-4'>
            <a href="https://www.instagram.com/krishna_earthmovers__1115?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-white transition duration-300 text-2xl'>
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100066623485755" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-white transition duration-300 text-2xl'>
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@krishnaearthmovers1115?si=45-CinOVa6eRIn9L" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-white transition duration-300 text-2xl'>
              <FaYoutube />
            </a>
            <a href="https://wa.me/919039031115" target="_blank" rel="noopener noreferrer" className='text-gray-200 hover:text-white transition duration-300 text-2xl'>
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className='w-full md:w-1/5 mb-8 md:mb-0 flex flex-col items-center md:items-start'>
          <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-gray-200'>
            <a href="#Header" className='hover:text-white transition duration-300'>Home</a>
            <a href="#About" className='hover:text-white transition duration-300'>About Us</a>
            <a href="#Contact" className='hover:text-white transition duration-300'>Contact Us</a>
            <a href="#Header" className='hover:text-white transition duration-300'>Privacy</a>
          </ul>
        </div>

        {/* Get Quote Section */}
        <div className='w-full md:w-1/3 flex flex-col items-center md:items-start'>
          <h3 className='text-white text-lg font-bold mb-4 text-center md:text-left'>
          Get Your Customized Quote Now
          </h3>
          <p className='text-gray-200 mb-4 text-center md:text-left max-w-80'>
            Enter your number, and we'll get back to you with the best price for your excavation needs.
          </p>
          <div className='flex flex-col md:flex-row gap-2 w-full'>
          <input
  type="tel"
  id="phoneInput"
  placeholder="Enter Phone number"
  className='p-2 rounded bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none w-full'
/>
            <button
  className='py-2 px-4 rounded bg-red-500 text-white hover:bg-red-600 transition duration-300 w-full md:w-auto'
  onClick={() => {
    const phoneNumber = document.getElementById("phoneInput").value;
    if (phoneNumber) {
      window.open(`https://wa.me/919039031115?text=Hello, I need a quote. My number is ${phoneNumber}`, "_blank");
    } else {
      alert("Please enter your phone number.");
    }
  }}
>
  Get Quote
</button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='border-t border-gray-500 py-4 mt-10 text-center text-gray-200'>
      © 2024 Krishna Earthmovers. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
