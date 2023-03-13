import React from 'react'

const Products = () => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='mx-auto w-[85%] h-[100vh] bg-gray-400 p-4'>
            <h1 className='text-center text-4xl mt-10'>Nasi proizvodi</h1>

            <div className='flex justify-between mt-10'>
          {/*container*/}
          <div className='w-[400px] h-[300px] bg-orange-400 p-8'>
           <h1 className='text-4xl mb-4'>Iskustvo</h1>
           <p>RE-SET INŽINJERING iako nova kompanija posjeduje ljude sa talentom i iskustvom.Naši radovi govore sami za sebe.</p>
          </div>

          <div className='w-[400px] h-[300px] bg-orange-400 p-8'>
           <h1 className='text-4xl mb-4'>Iskustvo</h1>
           <p>RE-SET INŽINJERING iako nova kompanija posjeduje ljude sa talentom i iskustvom.Naši radovi govore sami za sebe.</p>
          </div>
          
          <div className='w-[400px] h-[300px] bg-orange-400 p-8'>
           <h1 className='text-4xl mb-4'>Iskustvo</h1>
           <p>RE-SET INŽINJERING iako nova kompanija posjeduje ljude sa talentom i iskustvom.Naši radovi govore sami za sebe.</p>
          </div>
          
          </div>

        </div>
    </div>
  )
}

export default Products