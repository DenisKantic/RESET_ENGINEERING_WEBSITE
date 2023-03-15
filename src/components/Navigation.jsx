import React from 'react'

const HomePage = () => {
  return (
    <div className='max-w-full mx-auto p-4 bg-[#0ea5e9] fixed top-0 left-0 right-0 z-10 border-b-[1px] border-black'>
        <div className='w-[90%] mx-auto flex justify-between'>
        <div className=''>
        
        <h1 className=''>Reset</h1>
    
        </div>
        <div className='flex items-center justify-center'> 
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