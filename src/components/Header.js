import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
  return (  <header className='py-8'>
    <div className='container mx-auto '>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href='#!'>
        <button className='btn btn-sm'>work with me </button>

        </a>
        {/* <button className='btn btn-sm'>See my protfolio </button> */}
      </div>
    </div>
  </header>
  );
};

export default Header;
