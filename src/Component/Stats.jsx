import React from 'react'

const stats = () => {
  return (
    <div className='mt-10 w-full sm:px-40 px-5 sm:py-20 py-10 lg:px-30'>
    <div className='flex flex-wrap items-center justify-between gap-10'>
      <div
      className='flex items-center gap-[20px] background_black  justify-center background-gradient sm:w-[300px] w-full py-[5px] rounded-lg'>
        <h1 className='font-poppins xl:text-[40px] text-[32px] text-white'>
          3800+
        </h1>
        <span className='text-gradient text-[16px]'>
            USER ACTIVE
        </span>
      </div>
      <div
      className='flex items-center gap-[20px] background_black  justify-center background-gradient sm:w-[300px] w-full py-[5px] rounded-lg'>
        <h1 className='font-poppins xl:text-[40px] text-[32px] text-white'>
          230+
        </h1>
        <span className='text-gradient text-[16px]'>
            TRUSTED BY COMPANY
        </span>
      </div>
      <div
      className='flex items-center gap-[20px] background_black  justify-center background-gradient sm:w-[300px] w-full py-[5px] rounded-lg'>
        <h1 className='font-poppins xl:text-[40px] text-[32px] text-white'>
          $230M
        </h1>
        <span className='text-gradient text-[16px]'>
            TRANSACTION
        </span>
      </div>
    </div>
  </div>
  )
}

export default stats