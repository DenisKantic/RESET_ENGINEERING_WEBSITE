import React from 'react'
import './style.css';

const Products = () => {
  return (
    <div className='w-full h-[130vh] bg-[#f1f5f9]'>
        <div className='mx-auto w-[80%] h-[100vh] p-4'>
            <h1 className='text-center text-4xl mt-10'>Naši proizvodi</h1>

            <div className='flex justify-between mt-20'>
          {/*container*/}
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id="majice">
          </div>
           <div className='w-[400px] h-auto bg-[#e2e6ea] p-4 rounded-b-xl'>
            <h1 className='text-2xl'>Print na majice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>

          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='vizitke' >
          </div>
           
           <div className='w-[400px] h-auto bg-[#e2e6ea] p-4 rounded-b-xl'>
           <h1 className='text-2xl'>Vizit kartice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>
          
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='solje'>
          </div>
           
           <div className='w-[400px] h-auto bg-[#e2e6ea] rounded-b-xl p-4'>
           <h1 className='text-2xl'>Personalne solje</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>
          
          </div>

          <div className='flex justify-between mt-[100px]'>
           {/*container*/}
           <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='naljepnice'>
          </div>
           
           <div className='w-[400px] h-auto bg-[#e2e6ea] rounded-b-xl p-4'>
           <h1 className='text-2xl'>PVC naljepnice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>

          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='letak'>
          </div>
           
           <div className='w-[400px] h-auto bg-[#e2e6ea] rounded-b-xl p-4'>
           <h1 className='text-2xl'>Letak</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>
          
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='privjesak'>
          </div>
           
           <div className='w-[400px] h-auto rounded-b-xl p-4 bg-[#e2e6ea]'>
           <h1 className='text-2xl'>Privjesci</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>
          </div>
          

        </div>
    </div>
  )
}

export default Products