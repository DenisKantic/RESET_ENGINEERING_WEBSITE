import React from 'react'
import './style.css';

const AboutUs = () => {
  return (
    <div className='w-full bg-[#f1f5f9] 
                    xss:h-full md:h-[70vh]'>
        <div className='mx-auto w-[80%] p-4 flex items-center flex-row justify-between overflow-hidden 
                        xss:w-[95%] h-full md:w-[80%] h-[70vh]'>
      
        {/* left side */}
        <div className='w-[35%] bg-red-400 h-[50vh] mt-[-100px] xss:hidden md:block'>
          <div className='h-[25vh] bg-[#0ea5e9]'></div>
        </div>


        {/* right side */}
        <div className='w-[50%] h-[500px] mt-10 xss:w-full h-auto  md:w-[50%]'>
        <h1 className='text-5xl text-center xss:text-4xl'>O nama</h1>

        {/* blocks of text */}
        <div className='flex justify-between
                        xss:items-center md:flex '>

          {/* left side text */}
          <div className='mt-10'>
          <div className='w-[80%] mt-10 xss:w-full md:w-[80%]'>
            <h1 className='text-3xl'>Ko smo mi?</h1>
            <p className='mt-3 text-left'>RE-SET INŽINJERING je kompanija koja zapošljava isključivo osobe sa invaliditetom, kako bi živjele što lagodniji život</p>
          </div>
          <div className='w-[80%] mt-10 xss:w-full m-0 md:w-[80%] bg-red-400'>
            <h1 className='text-3xl'>Naša misija?</h1>
            <p className='mt-3'>Pružiti priliku mladim osobama sa invaliditetom da pridonose zajednici i da se osjećaju korisnim. </p>
          </div>
          </div>

          {/* right side of the text */}
          <div className='xss:flex flex-col ml-10 xss: m-0 md:block mt-10'>
          <div className='w-[80%] xss:w-full mt-0 md:w-[80%] mt-10'>
            <h1 className='text-3xl'>Naše usluge?</h1>
            <p className='mt-3'>Nudimo razne usluge kao što su: izrade vizit kartica, privjesaka, printa na majice, šolje, personalizirane čestitke i mnoštvo toga.</p>
          </div>
          <div className='w-[80%] xss:w-full md:w-[80%] mt-10 bg-green-400'>
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