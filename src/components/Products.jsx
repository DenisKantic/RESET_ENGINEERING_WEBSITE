import React from 'react'
import './style.css';

const Products = () => {
  return (
    <div className='w-full h-[140vh] bg-[#f1f5f9]'>
        <div className='mx-auto w-[80%] h-[100vh] p-4'>
            <h1 className='text-center text-4xl mt-10'>Naši proizvodi</h1>

            <div className='flex justify-between mt-20'>
          {/*container*/}
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id="majice">
          </div>
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] p-4 rounded-b-xl'>
            <h1 className='text-2xl'>Print na majice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
            <p className='text-sm mt-2'>Cijene vec od: 12 KM</p>
           </div>
          </div>

          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='vizitke' >
          </div>
           
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] p-4 rounded-b-xl'>
           <h1 className='text-2xl'>Vizit kartice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
            <p className='text-sm mt-2'>Cijene vec od: 12 KM</p>
           </div>
          </div>
          
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='solje'>
          </div>
           
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] rounded-b-xl p-4'>
           <h1 className='text-2xl'>Personalne solje</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
            <p className='text-sm mt-2'>Cijene vec od: 12 KM</p>
           </div>
          </div>
          
          </div>

          <div className='flex justify-between mt-[100px]'>
           {/*container*/}
           <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='solje'>
          </div>
           
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] rounded-b-xl p-4'>
           <h1 className='text-2xl'>Print na majice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
            <p className='text-sm mt-2'>Cijene vec od: 12 KM</p>
           </div>
          </div>

          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='solje'>
          </div>
           
           <div className='w-[400px] h-[150px] bg-[#e2e6ea] rounded-b-xl p-4'>
           <h1 className='text-2xl'>Print na majice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
            <p className='text-sm mt-2'>Cijene vec od: 12 KM</p>
           </div>
          </div>
          
          <div>
          <div className='w-[400px] h-[300px] p-8 rounded-t-xl' id='solje'>
          </div>
           
           <div className='w-[400px] h-[150px] rounded-b-xl p-4 bg-[#e2e6ea]'>
           <h1 className='text-2xl'>Print na majice</h1>
            <p className='text-md mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vitae.</p>
            <p className='text-sm mt-2'>Cijene vec od: 12 KM</p>
           </div>
          </div>
          </div>
          

        </div>
    </div>
  )
}

export default Products