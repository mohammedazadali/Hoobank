import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constant'
import { Link } from 'react-router-dom'

const Footer = () => {
  const Year = new Date().getFullYear()
  return (
    <footer className='py-10 sm:px-40 px-5 lg:px-30 w-full'>
        <div className='flex sm:flex-row flex-col gap-10 justify-between w-full'>
        <div className='flex flex-col gap-5 sm:basis-[40%] basis-0'>
            <img src={logo} alt="flogo" className='w-[200px]'/>
            <p className='text-dimwhite'>A new way to make the payment easy, reliable and secure</p>
        </div>
          <div className='flex sm:basis-[60%] basis-0 justify-between sm:flex-row flex-col gap-10'>
          {footerLinks.map((footer,index)=>{
            return(
                <div  key={index}>
                <div>
                 <p className='text-white text-[18px]'>{footer.title}</p>
                 <ul className='list-none'>
                    {footer.links.map((link,index)=>(
                        <Link to={link.link} key={index}>
                        <li className='text-dimwhite p-2' >
                            {link.name}
                        </li>
                        </Link>
           ))}
                 </ul>
                </div>
                </div>
            )
           })}
          </div>
        </div>
          <hr className='h-[1px] bg-white w-[100%] mt-10 mb-5'/>
          <div className='flex flex-wrap-reverse justify-between gap-10'>
          <span className='text-dimwhite'>Copyright &copy; {Year} Hoobank. All rights Reserved</span>
         <div className='flex gap-[10px] sm:m-0 m-auto'>
         {socialMedia.map((social)=>{
            return(
                <div key={social.id}>
                <Link to={social.link} ><img src={social.icon} alt="" /></Link>
                </div>
            )
          })}
         </div>
          </div>
    </footer>
  )
}

export default Footer