"use client";
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className='bg-gray-950 text-white p-4 flex justify-between items-center'>
      <p className='text-center w-full'>
        &copy; {currentYear} Get Me A Chai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
