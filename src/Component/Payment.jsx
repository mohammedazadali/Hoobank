import React from 'react'
import Button from './Button'
import { card } from '../assets'

const Payment = () => {
  return (
    <section className='flex sm:flex-row flex-col gap-10 justify-between items-center py-20 sm:px-40 px-5 lg:px-30' id='product'>
        <div className='flex flex-col gap-[20px] basis-[50%]'>
            <h1 className='font-poppins font-semibold xl:text-[38px] text-[40px] text-white'>Find a better card deal with just few steps
            </h1>
            <p className='text-dimwhite text-[16px] leading-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda consectetur inventore labore praesentium totam! Vel hic deleniti accusantium molestiae esse.
            </p>
            <Button title='Get Started'/>
        </div>
        <div className='basis-[50%]'>
            <img src={card} alt="card"/>
        </div>
    </section>
  )
}

export default Payment