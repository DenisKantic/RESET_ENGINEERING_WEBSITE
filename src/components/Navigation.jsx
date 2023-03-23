import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose,AiOutlineHome,AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlinePhone} from 'react-icons/ai';

const HomePage = () => {

  const [nav,setNav]=useState(false);

  return (
    <div className='w-full mx-auto p-3 bg-[#0ea5e9] fixed top-0 left-0 right-0 z-10'>
        <div className='w-[90%] mx-auto flex justify-between'>
        <div className='xss: w-full flex md:w-auto'>
        
        <AiOutlineMenu className='mr-2 cursor-pointer md:hidden' size={25} onClick={()=> setNav(!nav)}></AiOutlineMenu>
        <h1 className='xss: ml-5 text-lg md:hidden'>Reset Inžinjering</h1>
        <h1 className='xss:hidden md:block text-lg'>RESET INŽINJERING </h1>
        <div className={ nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0 duration-300' : 'fixed'}>
        <div className={nav ? 'bg-white w-[280px] fixed top-0 left-0 z-10 h-screen duration-300' : 'fixed left-[-100%] w-[-300px] top-0 duration-300'}>
        <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
                    onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose> 
                    <h1 className='text-xl  p-4'>Reset Inžinjering</h1>


                    <ul className='flex flex-col items-start p-4 text-black text-lg mt-[50px]'>
            <li className='mr-2 flex items-center py-2'><AiOutlineHome size={22} className='mr-5'/>POČETNA</li>
            <li className='mr-2 flex items-center py-2'><AiOutlineInfoCircle size={22} className='mr-5' />O NAMA</li>
            <li className='mr-2 flex items-center py-2'><AiOutlineShoppingCart size={22} className='mr-5' /> USLUGE</li>
            <li className='mr-2 flex items-center py-2'><AiOutlinePhone  size={22} className='mr-5'/>KONTAKT</li>
           </ul>


        </div>
        </div>
    
        </div>
        <div className='flex items-center justify-center xss:hidden md:flex'> 
           <ul className='flex flex-row text-white text-md'>
            <li className='mr-2 cursor-pointer
                          hover:text-red-400'>POČETNA</li>
            <li className='mr-2 cursor-pointer'>O NAMA</li>
            <li className='mr-2 cursor-pointer'>USLUGE</li>
            <li className='mr-2 cursor-pointer'>KONTAKT</li>
           </ul>
        </div>
       </div>
    </div>
  )
}

export default HomePage