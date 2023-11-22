import React from 'react'

const ServicesCard = (props) => {
  return (
    <div className="flex flex-col items-center bg-white hover:bg-black hover:text-white transition-all hover:-translate-y-2 w-full lg:w-1/4 py-5 gap-4 cursor-pointer rounded-md">
       <div>
           <span>{props.icon}</span>
       </div>
       <h2 className='text-xl font-semibold'> {props.title}</h2>
       <p> Blog , E-Commerce App </p>
    </div>
  )
}

export default ServicesCard