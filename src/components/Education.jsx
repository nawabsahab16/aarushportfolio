import React from 'react'
import EducationCard from '../layouts/EducationCard';

const Education = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7'> Education</h1>
        
        <div>
            <EducationCard title="Programming Course" />
            <EducationCard  title = "Web developer MASTERY"/>
        </div>
    </div>
  )
}

export default Education;