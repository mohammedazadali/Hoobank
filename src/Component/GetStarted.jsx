import React from 'react'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <button className='rounded-[100%] border-[3px] text-gradient flex-col items-center justify-center text-[16px]  h-[120px] w-[120px] flex' >
        <div className='flex gap-2'>
            Get <img src={arrowUp} alt="" />
        </div>
        Started
    </button>
  )
}

export default GetStarted