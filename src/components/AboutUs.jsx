import React from 'react'
import './style.css';

const AboutUs = () => {
  return (
    <div className='w-full h-[70vh] bg-[#f1f5f9]'>
        <div className='mx-auto w-[80%] h-[70vh] bg- p-4 flex items-center flex-row justify-between xss:w-[90%] h-screen md:w-[80%] h-[70vh]'>
      
        {/* left side */}
        <div className='w-[35%] bg-red-400 h-[50vh] mt-[-100px] xss:hidden md:block'>
          <div className='h-[25vh] bg-[#0ea5e9]'></div>
        </div>


        {/* right side */}
        <div className='w-[50%] h-[500px] mt-10 xss:w-full bg-red-400 md:w-[50%]'>
        <h1 className='text-5xl text-center xss:text-4xl'>O nama</h1>

        {/* blocks of text */}
        <div className='flex justify-between'>

          {/* left side text */}
          <div>
          <div className='w-[80%] mt-10 xss:w-full md:w-[80%]'>
            <h1 className='text-3xl'>Ko smo mi?</h1>
            <p className='mt-3'>RE-SET INŽINJERING je kompanija koja zapošljava isključivo osobe sa invaliditetom, kako bi živjele što lagodniji život</p>
          </div>
          <div className='w-[80%] mt-10 xss:w-full md:w-[80%]'>
            <h1 className='text-3xl'>Naša misija?</h1>
            <p className='mt-3'>Pružiti priliku mladim osobama sa invaliditetom da pridonose zajednici i da se osjećaju korisnim. </p>
          </div>
          </div>

          {/* right side of the text */}
          <div className='mt-10 xss:flex flex-col ml-10  mt-15 md:block'>
          <div className='w-[80%] mt-10 xss:w-full md:w-[80%]'>
            <h1 className='text-3xl'>Naše usluge?</h1>
            <p className='mt-3'>Nudimo razne usluge kao što su: izrade vizit kartica, privjesaka, printa na majice, šolje, personalizirane čestitke i mnoštvo toga.</p>
          </div>
          <div className='w-[80%] mt-10 xss:w-full mt-15 md:w-[80%] mt-10'>
            <h1 className='text-3xl'>Zašto nas izabrati?</h1>
            <p className='mt-3'>Zato jer nudimo najbolje cijene i najbolju kvalitetu na cijelom tržištu. Ujedno podržavate i udruženje "RE-SET", koje je i osnovalo ovu kompaniju.</p>
          </div>
          </div>
          
        </div>
        
        </div>

        </div>
    </div>
  )
}

export default AboutUs