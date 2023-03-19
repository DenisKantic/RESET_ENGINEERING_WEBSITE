import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose,AiOutlineHome,AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlinePhone} from 'react-icons/ai';

const HomePage = () => {

  const [nav,setNav]=useState(false);

  return (
    <div className='w-full mx-auto p-4 bg-[#0ea5e9] fixed top-0 left-0 right-0 z-10 border-b-[1px] border-black
    xss: absolute md: fixed'>
        <div className='w-[90%] mx-auto flex justify-between'>
        <div className='xss: w-full flex md:w-[100px]'>
        
        <AiOutlineMenu className='mr-2 cursor-pointer' size={25} onClick={()=> setNav(!nav)}></AiOutlineMenu>
        <h1 className='xss: ml-5 text-xl md:hidden'>Reset Inzinjering</h1>
        <h1 className='xss: hidden xs:fixed'>Reset</h1>
        <div className={ nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0 duration-300' : 'fixed'}>
        <div className={nav ? 'bg-white w-[300px] fixed top-0 left-0 z-10 h-screen duration-300' : 'fixed left-[-100%] w-[-300px] top-0 duration-300'}>
        <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
                    onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose> 
                    <h1 className='text-xl p-4 text-center'>Reset Inzinjering</h1>


                    <ul className='flex flex-col items-center text-black text-lg mt-[50px] text-xl'>
            <li className='mr-2 flex items-center py-2'><AiOutlineHome size={22} className='mr-5'/>POCETNA</li>
            <li className='mr-2 flex items-center py-2'><AiOutlineInfoCircle size={22} className='mr-5' />O NAMA</li>
            <li className='mr-2 flex items-center py-2'><AiOutlineShoppingCart size={22} className='mr-5' /> USLUGE</li>
            <li className='mr-2 flex items-center py-2'><AiOutlinePhone  size={22} className='mr-5'/>KONTAKT</li>
           </ul>


        </div>
        </div>
    
        </div>
        <div className='flex items-center justify-center xss:hidden md:flex'> 
           <ul className='flex flex-row text-white text-lg'>
            <li className='mr-2'>POCETNA</li>
            <li className='mr-2'>O NAMA</li>
            <li className='mr-2'>USLUGE</li>
            <li className='mr-2'>KONTAKT</li>
           </ul>
        </div>
       </div>
    </div>
  )
}

export default HomePage