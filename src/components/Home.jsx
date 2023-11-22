import React from 'react';
import img from "../assets/img/hero.png";
import Button from '../layouts/Button';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor ">
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4 ">
            <h1 className= "text-5xl font-semibold leading-tight mt-24 ">  
                I'm Raj Mishra
                <span className="text-brightColor"> Front-end </span>
                Developer 
            </h1>
            <p> 
            Passionate and innovative frontend developer with one year of hands-on experience. Proficient in crafting
            visually appealing and user-friendly interfaces using HTML, CSS, and JavaScript.
            Adept at translating design concepts into responsive, interactive web experiences.
            </p>
            <Button title="HIRE ME" />
        </div>
        <div>
            <img src={img} alt="img" />
        </div>
    </div>
  );
};
export default Home;