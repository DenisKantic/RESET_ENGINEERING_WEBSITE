import React from 'react'


const HomePage = () => {

  return (
    <div className='w-full h-screen bg-[#354a67]' id="backPicture">
      <div className='h-screen w-full'>
        <div className='mx-auto w-[90%] flex items-center justify-start h-screen
        xss:w-full xs:flex md:mt-0'>
            <div className='mx-auto w-[90%] h-[70vh] p-5 flex items-start justify-center flex-col'>
            <h1 className='text-[#dcdee0] text-center 
                            xss:text-3xl mx-auto md:text-4xl md:mx-0
                            '>RESET INŽINJERING</h1>
            <div className='xss:w-full md:w-[50%]'>
            <p className='text-2xl text-[#dcdee0] font-[300]
                          xss:text-lg text-center mt-10 xs:mt-10 md:text-left md:mt-2'>Dobrodosli u firmu Reset Inzinjering u kojoj rade iskljucivo osobe sa invaliditetom
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, est.!</p>
            </div>
            <div className='flex mt-10 w-full
            xss:flex-col items-center mx-auto justify-center md:block'>
                <button className='bg-[#f1f5f9] text-[#334155] rounded-md p-3 w-[160px] text-lg xss:mr-0 mb-5 md:mb-0 hover:font-[600]'><a href="#aboutUs">KO SMO MI?</a> </button>
                <button className='bg-[#455163] text-white p-3 rounded-md w-[160px] text-lg md:ml-5 hover:font-[600] hover:w-auto'><a href="#products">NAŠI PROIZVODI</a></button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default HomePage