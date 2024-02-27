import React, { useEffect } from 'react';
import HeroImage from '../assets/my_portfolio/hero1.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  useEffect(() => {
    // This code will run once when the component mounts
    console.log('Component mounted');
    
    // Return a cleanup function (optional)
    return () => {
      console.log('Component will unmount');
    };
  }, []); // Empty dependency array means this effect runs only once

  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 ">
      
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Hi there! I'm Pramod Giri. I'm a  Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 3 years of experience building and designing 
            software.
            Currently, I love to work on web application using
            technologies likes
            React, Tailwind, Next JS.
           
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r 
            from-cyan-500 to-blue-500 cursor-pointer  ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt='my profile' className="rounded-2xl mx-auto w-1/4  md:max-w-full "/>
        </div>
      </div>
    </div>
  )
}

export default Home;
