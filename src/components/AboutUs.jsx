import React from 'react'
import {AiFillStar} from 'react-icons/ai';

const AboutUs = () => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='mx-auto w-[85%] h-[100vh] bg-green-400 p-4'>
        <div className='w-[50%] bg-gray-400 mt-[100px]'>
        <h1 className='text-[50px]'>O nama</h1>
        <p className='text-lg mt-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quos delectus nisi harum asperiores Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum harum dolores suscipit quas possimus fugiat, laudantium aspernatur unde minima ullam non omnis ratione eos laboriosam officiis asperiores ducimus maxime autem. atque perferendis eligendi! Perferendis vero, esse at veritatis quis a quibusdam dolor sint accusantium recusandae eum, est optio fugiat nesciunt reiciendis tempore id! Similique, explicabo maiores!</p>
        </div>

        {/* center part, our goals */}
        <div className='mt-[120px] flex justify-center flex-col'>
        <h1 className='text-4xl mx-auto'>nase prednosti</h1>

        {/* three items */}
        <div className='flex justify-between mt-10'>
          {/*container*/}
          <div className='w-[400px] h-[300px] bg-gray-400 p-8'>
           <AiFillStar size={60} className='mb-2'></AiFillStar>
           <h1 className='text-4xl mb-4'>Iskustvo</h1>
           <p>RE-SET INŽINJERING iako nova kompanija posjeduje ljude sa talentom i iskustvom.Naši radovi govore sami za sebe.</p>
          </div>

          <div className='w-[400px] h-[300px] bg-gray-400 p-8'>
           <AiFillStar size={70} className='mb-2'></AiFillStar>
           <h1 className='text-4xl mb-4'>Fleksibilnost</h1>
           <p>Nudimo fleksibilnost cijene,velika kvaliteta za pristojan novac. Sa nama je sve stvar dogovora,nudimo kvalitet a ne kvantitet.</p>
          </div>

          <div className='w-[400px] h-[300px] bg-gray-400 p-8'>
           <AiFillStar size={70} className='mb-2'></AiFillStar>
           <h1 className='text-4xl mb-4'>Kreativne Ideje</h1>
           <p>Kreativnost oblikuje naš rad kreativne ideje najjbolje ideje</p>
          </div>
        </div>

        </div>

        </div>
    </div>
  )
}

export default AboutUs