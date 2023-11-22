import React from 'react'

const EducationCard = (props) => {
  return (
    <div className="flex flex-col lg:flex-row py-4">
        <div className='w-full lg:w-2/4'>
            <h2 className='font-semibold'> {props.title} </h2>
        <div className='mt-2'>
           <p> Student </p>
           <p> JAN 2020 - July 2022</p>
        </div>
    </div>
    <div>
        <h2 className='font-semibold mt-2 lg:mt-0'> Certificate of Training</h2>
        <p className='mt-2'>  mastery of JavaScript, demonstrating expertise in utilizing 
            the language to build dynamic and interactive web applications.
            With a focus on advanced concepts and practical implementation,
            this certification validates Raj's ability to create efficient and robust
            frontend solutions, elevating user experiences through innovative coding 
            practices. 
       </p>
       <div className='bg-slate-500 w-full h-0.5 mt-2'>

       </div>
    </div>
    </div>
  )
}

export default EducationCard