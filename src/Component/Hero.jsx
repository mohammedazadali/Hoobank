import React from 'react'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section className='flex justify-between  py-[20px] items-start w-full sm:flex-row flex-col gap-20'  id='home'>
      <div className='flex flex-col items-start gap-10 flex-1 m-auto sm:pl-40 pl-5 lg:pl-30  am:pr-0 pr-5 sm:w-[50%] w-[100%] xl:pl-20'>
        
        {/* discount place */}
        <div className='flex items-center gap-[10px] background-gradient px-[10px] py-[5px] rounded-lg'>
          <img src={discount} alt="discount" className='h-[32px] w-[32px]'/>
          <p className='font-poppins font-normal text-[16px] text-gray-400 transform-'>
            <span className='text-white'>20%</span> Discount For <span className='text-white'>1 Month</span> Account
          </p>
        </div>

        {/* hero-content */}
        <div className='font-poppins font-semibold text-white leading-85.8 xs:text-[48px] text-[50px]'>
          <div className='flex justify-between items-center gap-10'>
          <div  >
          <h1>The Next {" "}
          <span className='text-gradient'>Generation</span></h1>
          </div>
          <div className='sm:block hidden'>
          <GetStarted />
          </div>
          </div>
          <h1 className='font-poppins font-semibold text-white leading-85.8 xs:text-[48px] text-[50px]'>Payment Mathod.</h1>
        </div>
        <p className='font-poppins text-[18px] text-dimwhite leading-8 '>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.we examine annual percentage rates, annual fees
        </p>
        <div className='absolute  rounded-full left-0 white_gradient z-[0] w-[20%] h-[30%]'></div>
      </div>
      <div className='sm:w-[50%] w-[100%]'>
        <img src={robot} alt="robot" className='h-[100%] w-[100%] z-[0]' />

        {/* <div className='absolute z-[0] pink_gradient w-[40%] h-[30%] top-0 '></div>
        <div className='absolute z-[1] ronded-full white_gradient  w-[40%] h-[50%] bottom-20 '></div> */}
      </div>
      <div className='sm:hidden block m-auto'>
      <GetStarted />
      </div>
    </section>
  )
}

export default Hero