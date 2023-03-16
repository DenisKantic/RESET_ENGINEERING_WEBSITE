import React from 'react'
import {data} from './data/data.js';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const OtherServices = () => {
  return (
    <div className='w-full h-screen bg-[#f1f5f9] bg-red-400'>
      <h1 className='text-center text-4xl p-10'>Nase ostale usluge</h1>

      {data.map(data =>{
      
      return  <Swiper slidesPerView={3} modules={[Navigation, Pagination, Scrollbar, A11y]} 
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      spaceBetween={50}
      className='w-full h-screen'>
       <SwiperSlide key={data.id}>
        <div className='w-full h-[80vh] mt-10 bg-blue-400 bg-cover bg-no-repeat' style={{backgroundImage: `url(${data.image})`}}>
            <div className='mx-auto w-full h-[80vh] flex items-start justify-center flex-col p-4'>
              <h1 className='text-4xl'>{data.header}</h1> 
              <p className='text-2xl'>{data.price}</p>
            </div>
        </div>
        </SwiperSlide>
      </Swiper>
      })}
      </div>
  )
}

export default OtherServices