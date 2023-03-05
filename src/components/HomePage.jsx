import React from 'react'

const HomePage = () => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='mx-auto w-[90%] h-[100vh] flex items-center justify-start h-screen'>
            <div className='w-[50%] h-[50vh] p-5 flex items-start justify-center flex-col'>
            <h1 className='text-[70px]'>RESET <br /> INŽINJERING</h1>
            <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, adipisci!</p>
            <div className='flex flex-row mt-4'>
                <button className='bg-orange-400 mr-4 rounded-xl p-2 text-xl'>Ko smo mi?</button>
                <button className='bg-orange-400 p-2 rounded-xl text-xl'>Nase usluge</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage