import React from 'react'
import {data} from './data/data.js';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OtherServices = () => {
  return (
    <div className='w-full h-auto bg-[#f1f5f9]'>
      <h1 className='text-center text-4xl p-10'>Naše ostale usluge</h1>

    <Swiper 
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    className='h-[80vh] w-full'>
      {data.map(item =>{
        return <SwiperSlide key={item.id} 
        className="w-full bg-cover bg-center h-screen bg-no-repeat" style={{backgroundImage: `url(${item.image})`}}>
          <div className='flex flex-col justify-center items-center h-full'>
          <h1 className='text-center text-white font-[600]
                        xss: text-2xl w-[70%] sm:text-3xl md:text-4xl w-[80%] lg:text-5xl w-[60%]'>{item.header}</h1>
          <h1>{item.price}</h1>
          </div>
          </SwiperSlide>
      })}
    </Swiper>

    <h1 className='text-center p-10 xss:text-md md:text-lg lg:text-2xl cursor-default'>Imate nešto drugo na umu? Kontaktirajte nas i ponudit ćemo Vam najbolje rješenje uz najbolju cijenu i kvalitetu. <br />
    Za sve naše buduće klijente, nudimo besplatne uzorke, kako bi se uvjerili u naš kvalitet!</h1>
      </div>
  )
}

export default OtherServices