import React from 'react'
import './style.css';

const Products = () => {
  return (
    <div className='w-full bg-[#f1f5f9] md:h-[130vh] overflow-hidden'>
        <div className='mx-auto w-[80%] h-[100vh] p-4
        xss:h-full mx-auto w-[90%]'>
            <h1 className='text-center text-4xl mt-10'>Naši proizvodi</h1>

            <div className='flex justify-between mt-20 xss:flex-col mx-auto md:flex-row'>
          {/*container*/}
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
          xss:w-full md:w-[400px]' 
          id="majice">
          </div>
           <div className='w-[400px] h-auto bg-[#e2e6ea] p-4 rounded-b-xl
           xss:w-full mb-10 md:w-[400px]'>
            <h1 className='text-2xl p-1 bg-gray-400 w-[50%] xss:w-[60%] md:w-[50%]'>Print na majice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>

          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
            xss:w-full md:w-[400px]' id='vizitke' >
          </div>
           
           <div className='w-[400px] h-auto bg-[#e2e6ea] p-4 rounded-b-xl
            xss:w-full mb-10 md:w-[400px]'>
           <h1 className='text-2xl p-1 bg-gray-400 w-[50%] xss:w-[60%] md:w-[50%]'>Vizit kartice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>
          
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
              xss:w-full md:w-[400px]' id='solje'>
          </div>
           
           <div className='w-[400px] h-auto bg-[#e2e6ea] rounded-b-xl p-4
                 xss:w-full mb-10 md:w-[400px] '>
           <h1 className='text-2xl p-1 bg-gray-400 w-[50%] xss:w-[60%] md:w-[50%]'>Personalne solje</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>
          
          </div>

          <div className='flex justify-between  xss:flex-col  md:flex-row'>
           {/*container*/}
           <div >
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
          xss:w-full md:w-[400px]' id='naljepnice'>
          </div>
           
           <div className='w-[400px] h-auto bg-[#e2e6ea] rounded-b-xl p-4
           xss:w-full mb-10 md:w-[400px]'>
           <h1 className='text-2xl p-1 bg-gray-400 w-[50%] xss:w-[60%] md:w-[50%]'>PVC naljepnice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>

          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
          xss:w-full md:w-[400px]' id='letak'>
          </div>
           
           <div className='w-[400px] h-auto bg-[#e2e6ea] rounded-b-xl p-4
           xss:w-full mb-10 md:w-[400px]'>
           <h1 className='text-2xl p-1 bg-gray-400 w-[50%] xss:w-[60%] md:w-[50%]'>Letak</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>
          
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl
          xss:w-full md:w-[400px]' id='privjesak'>
          </div>
           
           <div className='w-[400px] h-auto rounded-b-xl p-4 bg-[#e2e6ea]
           xss:w-full mb-10 md:w-[400px]'>
           <h1 className='text-2xl p-1 bg-gray-400 w-[50%] xss:w-[60%] md:w-[50%]'>Privjesci</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
           </div>
          </div>
          </div>
          

        </div>
    </div>
  )
}

export default Products