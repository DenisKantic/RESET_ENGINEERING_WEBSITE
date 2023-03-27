import React from 'react'
import './style.css';

const Products = () => {
  return (
    <div className='w-full min-h-[100vh] bg-[#f1f5f9] overflow-hidden' id="products">
        <div className='flex flex-col mx-auto w-[80%] p-4
        xss:h-full'>
            <h1 className='text-center text-4xl mt-[80px] cursor-default'>Naši proizvodi</h1>

            <div className='grid gap-10 mt-10 xss:grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  cursor-default'>
          {/*container*/}
          
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
          xss:w-full' 
          id="majice">
          </div>
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] p-4 rounded-b-xl
           xss:w-full mb-10'>
          <h1 className='px-2 bg-[#333e4e] table text-white rounded-md
                          xss:text-md text-2xl'>Print na majice</h1>
            <p className='text-md mt-2 p-1 xss:text-sm md:text-lg'>Serijska izrada majica sa logom Vaše firme ili slično</p>
           </div>
           </div>
          

         
         <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
            xss:w-full' id='vizitke' >
          </div>
           
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] p-4 rounded-b-xl 
            xss:w-full mb-10'>
           <h1 className='table rounded-md bg-[#333e4e] px-2 text-white
                          xss:text-md text-2xl' >Vizit kartice</h1>
            <p className='text-md mt-2 p-1 xss:text-sm md:text-lg'>Kvalitetne plastificirane vizit kartice sa Vašim ili našim dizajnom.</p>
           </div>
           </div>
          
          
        <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
              xss:w-full' id='solje'>
          </div>
           
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] rounded-b-xl p-4
                 xss:w-full mb-10'>
           <h1 className='table rounded-md bg-[#333e4e] px-2 text-white
                          xss:text-md text-2xl'>Personalne solje</h1>
            <p className='text-md mt-2 p-1 xss:text-sm md:text-lg'>Kvalitetni UV print na šolje sa Vašim motivima, logo firme...</p>
           </div>
          </div>
          
        <div>        
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
          xss:w-full ' id='naljepnice'>
          </div>
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] rounded-b-xl p-4
           xss:w-full mb-10 '>
           <h1 className='table rounded-md bg-[#333e4e] px-2 text-white
                        xss:text-md text-2xl'>PVC naljepnice</h1>
            <p className='text-md mt-2 p-1 xss:text-sm md:text-lg'>Jednobojni ili u boji kvalitetni print svih vrsta PVC naljepnica.</p>
           </div>
           </div>
        

          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
          xss:w-full' id='letak'>
          </div>
           
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] rounded-b-xl p-4
           xss:w-full mb-10'>
           <h1 className='table rounded-md bg-[#333e4e] px-2 text-white
                          xss:text-md text-2xl'>Letci</h1>
            <p className='text-md mt-2 p-1 xss:text-sm md:text-lg'>Serijska izrada letaka različitih dimenzija, oblika i izgleda.</p>
           </div>
           </div>
          
         
         <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
          xss:w-full' id='privjesak'>
          </div>
           
           <div className='w-[400px] h-[150px] rounded-b-xl p-4 bg-[#e2e6ea]
           xss:w-full mb-10 '>
           <h1 className='table rounded-md bg-[#333e4e] px-2 text-white
                        xss:text-md text-2xl'>Privjesci</h1>
            <p className='text-md mt-2 p-1 xss:text-sm md:text-lg'>Kvalitetni privjesci različitog oblika, dimenzija i izgleda.</p>
           </div>
           </div>
           </div>
           
          </div>
    </div>
  )
}

export default Products