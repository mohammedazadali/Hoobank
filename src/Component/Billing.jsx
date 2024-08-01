import React from 'react'
import { google,apple, bill } from '../assets'

const Billing = () => {
  return (
    <section className='flex sm:flex-row flex-col gap-10 justify-between items-center py-10 sm:px-40 px-5 lg:px-30'>
        <div className='basis-[50%]'>
            <img src={bill} alt="billing"/>
        </div>
        <div className='flex flex-col basis-[40%] gap-[20px]'>
            <h1 className='font-poppins font-semibold xl:text-[38px] text-[40px] text-white'>Easily control your billing & invoicing</h1>
            <p className='font-poppins text-dimwhite leading-6 text-[14px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae praesentium rerum corporis dolorem accusamus corrupti iste consectetur mollitia earum.</p>
            <div className='flex items-center gap-10 mt-5'>
                <img src={google} alt="google" />
                <img src={apple} alt="apple" />
            </div>
        </div>
    </section>
  )
}

export default Billing