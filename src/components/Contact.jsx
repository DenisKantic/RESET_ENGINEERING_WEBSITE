import React from 'react'
import {AiOutlineHome,AiOutlinePhone,AiOutlineMail,AiOutlineMobile} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='w-full min-h-[70vh] bg-red-400 overflow-hidden' id="contact">
      <h1 className='text-4xl text-center p-5'>Kontaktirajte nas!</h1>
    <div className='flex w-[70%] justify-between mx-auto items-center mt-[100px]'>
      {/* item1 */}
      <div className='flex flex-col justify-center items-center'>
      <AiOutlineHome size={40}/>
      <h1 className='text-2xl'>Adresa</h1>
      <p>Franje Markovića 12 75000 Tuzla</p>
      </div>

      {/* item2 */}
      <div className='flex flex-col justify-center items-center'>
      <AiOutlinePhone size={40}/>
      <h1 className='text-2xl'>Telefon</h1>
      <p>+387 35 981 011</p>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <AiOutlineMobile size={40}/>
      <h1 className='text-2xl'>Mobitel/Viber</h1>
      <p>+387 61 665 729</p>
      </div>

      {/* item3 */}
      <div className='flex flex-col justify-center items-center'>
      <AiOutlineMail size={40}/>
      <h1 className='text-2xl'>Email</h1>
      <p>reset.inzinjering@gmail.com</p>
      </div>


      </div>

      </div>
  )
}

export default Contact