import React from 'react'
import { feedback } from '../constant'
import { quotes } from '../assets'

const Testimonial = () => {
  return (
    <section className='flex flex-col gap-10 py-10 sm:px-40 px-5 md:px-30'>
        <div className='flex flex-wrap justify-between'>
            <h1 className='font-poppins font-semibold basis=[40%] xl:text-[38px] text-[40px] text-white'>
                What people say about us
            </h1>
            <p className='text-dimwhite sm:basis-[40%] basis-[100%]'>Everything you need to accept card payment and grow your business anywhere in the planet</p>
        </div>
            <div className='flex flex-wrap sm:justify-between justify-center items-start '>
                {feedback.map((feadback,index)=>(
                    <div key={index}>
                    <div className={`flex flex-col   ss:w-[300px] w-[100%]  sm:h-[300px] h-[100%] justify-between gap-10 ${index !== feadback.length -1 ? 'mb-10' : 'mb-0'} feature-card p-[20px] rounded-lg`} >
                        <img src={quotes} alt="" className='w-[32px] '/>
                        <p className=' font-poppins text-white leading-7'>{feadback.content}</p>
                        <div className='flex gap-[15px] items-center'>
                            <img src={feadback.img} alt="people" className='w-[32px] h-[32px]' />
                            <div>
                                <p className='text-white'>{feadback.name}</p>
                                <p className='text-dimwhite text-[12px]'>{feadback.title}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
    </section>
  )
}

export default Testimonial