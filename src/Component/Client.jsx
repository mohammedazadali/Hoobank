import React from 'react'
import { clients } from '../constant'

const Client = () => {
  return (
    <section className='flex flex-wrap gap-10 sm:justify-between justify-center items-center py-5 sm:px-40 px-5 lg:px-30' id='clients'>
        {clients.map((client)=>{
            return(
                <div key={client.id}>
                    <img src={client.logo} alt={client.id} className='sm:w-[150px] w-[100%] h-[40px]' />
                </div>
            )
        })}
    </section>
  )
}

export default Client