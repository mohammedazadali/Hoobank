import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-gradient w-fit px-[20px] py-[15px] rounded-lg font-poppins font-medium'>
        {props.title}
    </button>
  )
}

export default Button