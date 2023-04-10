import React from 'react'
import {AiOutlineHome,AiOutlinePhone,AiOutlineMail,AiOutlineMobile} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='w-full min-h-[80vh] overflow-hidden  bg-[#f1f5f9]' id="contact">
      <h1 className='text-4xl text-center p-5'>Kontaktirajte nas!</h1>

      {/* wrapper */}
      <div className='w-[90%] mx-auto flex justify-center items-center mt-10
      xss: flex-col w-[100%] h-[100vh] md:flex-row md:h-[60vh] lg:w-[90%] '>

       
      <iframe className='h-[60vh] w-[60%] xss:hidden mdd:block' 
      frameborder="0"  marginheight="0" marginwidth="0" id="gmap_canvas" title="google_maps"
      src="https://maps.google.com/maps?width=949&amp;height=501&amp;hl=en&amp;q=Franje%20markovi%C4%87a%2012%20Tuzla+(RESET%20IN%C5%BDINJERING)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
      </iframe>


    <div className='bg-[#282c31] grid justify-center text-white p-2 h-[60vh] h-full
    xss:w-full xss:grid-cols-1 md:grid-cols-2 mdd:w-[50%] lg:w-[40%]'>
      {/* item1 */}
      <div className='flex flex-col justify-center items-center h-full w-full
      xss:p-4 md:p-0'>
      <AiOutlineHome size={40}/>
      <h1 className='p-2
      xss: text-xl mdd:text-2xl'>Adresa</h1>
      <p className='xss:text-md mdd:text-lg text-center'>Franje Markovića 12 75000 Tuzla</p>
      </div>

      {/* item2 */}
      <div className='flex flex-col justify-center items-center w-full h-full
      xss:p-4 md:p-0'>
      <AiOutlinePhone size={40}/>
      <h1 className=' p-2
      xss:text-xl mdd:text-2xl'>Telefon</h1>
      <p className='xss:text-md mdd:text-lg text-center'>+387 35 981 011</p>
      </div>

      <div className='flex flex-col justify-center items-center h-full w-full
      xss:p-4 md:p-0'>
      <AiOutlineMobile size={40}/>
      <h1 className='p-2
      xss:text-xl mdd:text-2xl'>Mobitel/Viber</h1>
      <p className='xss:text-md mdd:text-lg text-center'>+387 61 665 729</p>
      </div>

      {/* item3 */}
      <div className='flex flex-col justify-center items-center h-full w-full
      xss:p-4 md:p-0'>
      <AiOutlineMail size={40}/>
      <h1 className='p-2
      xss:text-xl mdd:text-2xl'>Email</h1>
      <p className='xss:text-md text-center break-all'>reset.inzinjering@gmail.com</p>
      </div>

      </div>

      </div>
      </div>
  )
}

export default Contact