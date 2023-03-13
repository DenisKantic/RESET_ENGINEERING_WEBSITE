import React from 'react'

const HomePage = () => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='mx-auto w-[90%] h-[100vh] flex items-center justify-start h-screen'>
            <div className='w-full h-[70vh] p-5 flex items-center justify-center flex-col bg-pink-400'>
            <h1 className='text-[70px]'>RESET INŽINJERING</h1>
            <p className='text-2xl'>Dobrodosli u firmu Reset Inzinjering u kojoj rade iskljucivo osobe sa invaliditetom!</p>
            <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, ad.</p>
            
              {/*container*/}
              <div className='flex flex-row justify-around bg-red-400 w-full mt-10'>
          <div className='w-[300px] h-[300px] bg-orange-400 p-8'>
           <h1 className='text-4xl mb-4'>Iskustvo</h1>
           <p>RE-SET INŽINJERING iako nova kompanija posjeduje ljude sa talentom i iskustvom.Naši radovi govore sami za sebe.</p>
          </div> 

            {/*container*/}
            <div className='w-[300px] h-[300px] bg-orange-400 p-8'>
           <h1 className='text-4xl mb-4'>Iskustvo</h1>
           <p>RE-SET INŽINJERING iako nova kompanija posjeduje ljude sa talentom i iskustvom.Naši radovi govore sami za sebe.</p>
          </div>

            {/*container*/}
            <div className='w-[300px] h-[300px] bg-orange-400 p-8'>
           <h1 className='text-4xl mb-4'>Iskustvo</h1>
           <p>RE-SET INŽINJERING iako nova kompanija posjeduje ljude sa talentom i iskustvom.Naši radovi govore sami za sebe.</p>
          </div>
          </div>


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