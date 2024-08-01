import React from 'react'
import { features } from '../constant'
import Button from './Button'

const Feature = () => {
  return (
    <section className='flex sm:flex-row flex-col gap-10 justify-between items-center py-10 sm:px-40 px-5 lg:px-30' id='features'>
        <div className='flex flex-col gap-[20px] basis-[50%]'>
            <h1 className='font-poppins font-semibold xl:text-[38px] text-[40px] text-white'>You do the business,<br />
                we'll handle the money.
            </h1>
            <p className='text-dimwhite text-[16px] leading-6'>
                with right credit card, you can imporve your finance life by building credit,saving money and earning rewards. But with hundreds of credit cards in the market 
            </p>
            <Button title='Get Started'/>
        </div>
        <div className='flex flex-col justify-between gap-10 '>
            {features.map((feature,index)=>{
                return(
                    <div key={feature.id} className='flex items-center gap-[15px] sm:w-[450px] w-[100%] feature-card py-[10px] sm:px-[20px] px-[10px] rounded-lg'>
                        <div className='text-gradient rounded-full p-[10px] basis-[20%] items-center justify-center'>
                        <img src={feature.icon} alt=""  className='h-[32px] w-[32px]' />
                        </div>
                        <div className='flex flex-col'>
                            <h3 className='font-poppins text-white'>{feature.title}</h3>
                            <p className='font-poppins text-dimwhite'>{feature.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Feature