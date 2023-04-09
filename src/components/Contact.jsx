import React from 'react'
import {AiOutlineHome,AiOutlinePhone,AiOutlineMail,AiOutlineMobile} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='w-full min-h-[70vh] overflow-hidden' id="contact">
      <h1 className='text-4xl text-center p-5'>Kontaktirajte nas!</h1>

      {/* wrapper */}
      <div className='w-[90%] mx-auto'>
      <iframe width="100%" className='h-[60vh] mt-10' frameborder="0"  marginheight="0" marginwidth="0" id="gmap_canvas" 
      src="https://maps.google.com/maps?width=949&amp;height=501&amp;hl=en&amp;q=Franje%20markovi%C4%87a%2012%20Tuzla+(RESET%20IN%C5%BDINJERING)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>


    <div className='mx-auto bg-blue-400 flex justify-between p-5'>
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
      </div>
  )
}

export default Contact