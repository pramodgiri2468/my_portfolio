import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
    
      <div className="max-w-screen-lg p-5 mx-auto flex flex-col justify-center w-full h-full  ">
        <div className="pb-8 sm:flex sm:items-end">
            <p className="text-4xl font-bold inline  border-gray-500   ">About</p>
        </div>
        <p className="text-sm md:text-xl ">
        As a full-stack developer, 
        I'm proficient in both frontend and backend technologies, 
        blending expertise in JavaScript, React, and Python frameworks like Django. 
        From crafting intuitive user interfaces to implementing robust server-side logic, 
        I ensure seamless end-to-end development. 
        My approach prioritizes user-centric design and scalable architecture, 
        delivering impactful web solutions aligned with client goals.
        </p>
        <br />

    

        <p className="text-sm md:text-xl ">
        Specializing as a Python developer, 
        I leverage the language's versatility to build efficient backend systems, 
        utilizing frameworks such as Django and Flask. With Python's rich ecosystem, 
        I tackle diverse tasks ranging from data analysis to web scraping, 
        ensuring optimal performance and maintainability. 
        My commitment lies in harnessing Python's power to create innovative solutions that drive business success
         and foster digital innovation.
        </p>

        
      </div>
    </div>
  )
};

export default About;
