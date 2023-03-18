import React from 'react'
import {data} from './data/data.js';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const OtherServices = () => {
  return (
    <div className='w-full h-screen bg-[#f1f5f9]'>
      <h1 className='text-center text-4xl p-10'>Nase ostale usluge</h1>

    <Swiper 
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    className='h-[80vh] w-full'>
      {data.map(item =>{
        console.log(item.image)
        return <SwiperSlide key={item.id} 
        className="w-full bg-cover bg-center h-screen" style={{backgroundImage: `url(${item.image})`}}>
          <div>
          <h1>{item.header}</h1>
          <h1>{item.price}</h1>
          </div>
          </SwiperSlide>
      })}
    </Swiper>
      </div>
  )
}

export default OtherServices