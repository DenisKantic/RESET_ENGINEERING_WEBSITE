import React from 'react'


const HomePage = () => {

  return (
    <div className='w-full h-[100vh] bg-center bg-cover top-0' id="backgroundPicture">

        <div className='mx-auto w-[90%] flex items-center justify-start h-screen bg-center bg-cover'>
            <div className='mx-auto w-[90%] h-[70vh] p-5 flex items-start justify-center flex-col'>
            <h1 className='text-6xl text-[#334155]'>RESET INŽINJERING</h1>
            <div className='w-[50%]'>
            <p className='text-xl text-[#334155]'>Dobrodosli u firmu Reset Inzinjering u kojoj rade iskljucivo osobe sa invaliditetom
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, est.!</p>
            </div>
            <div className='flex flex-row mt-10'>
                <button className='bg-[#0ea5e9] text-white mr-4 rounded-md p-3 w-[150px] text-lg'>KO SMO MI?</button>
                <button className='bg-[#334155] text-white p-3 rounded-md w-[150px] text-lg'>NASE USLUGE</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage