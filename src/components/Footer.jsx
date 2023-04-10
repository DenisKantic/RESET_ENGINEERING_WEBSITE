import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center bg-[#354a67] text-white
    xss:flex-col h-[9vh] text-sm md:flex-row md:h-[4vh] md:text-lg'>
        <h1 className='cursor-default'>RESET INŽINJERING &copy; 2023</h1> 
        <p className='xss:m-0 md:ml-5 cursor-default'>Made by: <a className='font-bold cursor-pointer' href="https://www.linkedin.com/in/denis-kantic">Denis Kantic</a></p>
        </div>
  )
}

export default Footer