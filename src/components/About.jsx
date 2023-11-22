import React from 'react'
import SkillCard from '../layouts/SkillCard';

const About = () => {

   const skill1 = "w-11/12";
   const skill2 = "w-9/12";
   const skill3 = "w-7/12";
   const skill4 = "w-7/12";
   const skill5 = "w-9/12";

  return (
    <div className="min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 bg-backgroundColor">
        <div className='mt-16'>
            <h1 className="text-4xl font-semibold text-center lg:mt-2">
                About Me
            </h1>
        </div>

        <div className="-mt-10">
            <div className="mb-10">
                <h2 className="text-3xl ">
                    I'm Raj Mishra 
                </h2>
              <p>
              Frontend enthusiast with over a year's experience turning designs into captivating
               user interfaces. Proficient in HTML, CSS, and JavaScript, dedicated to creating 
               seamless digital experiences. Passionate about learning and contributing to innovative
              projects. Beyond the code, I'm an avid learner, always seeking to expand my knowledge
               base and stay ahead in an ever-evolving tech landscape
              </p>
            </div>

            <div>
                <h2>
                    My Skills
                </h2>
                <div>
                   <SkillCard title="HTML" width={skill1} val="95%"/>
                   <SkillCard title="CSS" width={skill2} val="75%"/>
                   <SkillCard title="JavaScript" width={skill3} val="65%"/>
                   <SkillCard title="Reactjs" width={skill4} val="65%"/>
                   <SkillCard title="Figma" width={skill5} val="75%"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About