import React, { useState } from 'react';
import t201 from '../media/t201.svg';

const Header = () => {

  const [showHamburger, setShowHamburger] = useState(false);

  const handleShowHamburger = () => {
    setShowHamburger(true);
  };

  const handleHideHamburger = () => {
    setShowHamburger(false);
  };

  return (
    <>
    <div className='flex w-full bg-blue-950 font-bold text-xs text-white justify-evenly'>
      <div onClick={handleShowHamburger}  className='flex items-center'>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round"></path> </g></svg>      </div>
      <div className='py-4'>
        <img src={t201} alt="Logo" />
      </div>
      <div className=' bg-blue-950 flex justify-center items-center'>
        <ul className='flex pl-6 border-l-2 border-slate-200'>
          <li className='px-2'>ICC HOME</li>
          <li className='px-2'>MATCHES</li>
          <li className='px-2'>STANDINGS</li>
          <li className='px-2'>NEWS</li>
          <li className='px-2'>VIDEOS</li>
          <li className='px-2'>FAN PASSPORT</li>
          <li className='px-2'>FANTASY</li>
          <li className='px-2'>PREDICTOR</li>
          <li className='px-2'>TICKETING</li>
          <li className='px-2'>MORE</li>
        </ul>
      </div>
      <div className='flex items-center'>
        <div className='flex'>
          <svg className='stroke-white' width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#d4d4d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className='px-1'>SEARCH</p>
        </div>
        <div className='flex px-3'>
          <svg stroke="#ffffff" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <p className='px-1'>SIGN IN</p>
        </div>
      </div>

    </div>

    {showHamburger && (
      <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 flex justify-left z-50'>
        <div className='relative z-10 w-1/3 h-full '>
          <div className='h-full w-full bg-blue-950'>
            <div className='flex items-center justify-evenly py-4 border-b-2 space-x-16'>
              <div onClick={handleHideHamburger} className='px-4 py-4 '>
              <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fill-rule="evenodd"></path> </g></svg>              </div>
              <div className='pr-4'>
                <img src={t201} alt="Logo" />
              </div>
            </div>

            <div>
              <ul className='pt-8 pl-6 text-white font-bold text-2xl '>
                <li className='px-2 py-2'>HOME</li>
                <li className='px-2 py-2'>MATCHES</li>
                <li className='px-2 py-2'>STANDINGS</li>
                <li className='px-2 py-2'>VIDEOS</li>
                <li className='px-2 py-2'>NEWS</li>
                <li className='px-2 py-2'>TEAMS</li>
                <li className='px-2 py-2'>STATS</li>
                <li className='px-2 py-2'>FANTASY</li>
                <li className='px-2 py-2'>PREDICTOR</li>
                <li className='px-2 py-2'>BUY TICKETS</li>
                <li className='px-2 py-2'>ABOUT</li>
                <li className='px-2 py-2'>ICC HOME</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Header;