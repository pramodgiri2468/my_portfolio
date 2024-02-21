import React from 'react';
import python from '../assets/my_portfolio/python.jpg';
import HTML from '../assets/my_portfolio/HTML.jpg';
import css from '../assets/my_portfolio/css.jpg';
import npm from '../assets/my_portfolio/npm.jpg';
import react from '../assets/my_portfolio/react.jpg';

const Projects = () => {

    const projects = [
        {
            id: 1,
            src: HTML
        },

        {
            id: 2,
            src: css
        },

        {
            id: 3,
            src: npm
        },

        {
            id: 4,
            src: react
        },

        {
            id: 5,
            src: python
        },

        
    ]
  return (
    <div name="Projects" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen  ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Projects</p>
            <p className="py-6 ">Check out some of my Projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  ">
            <div className="shadow-md shadow-gray-600 rounded-lg">
                <img src={python} alt="" className="rounded-md duration-200 hover:scale-105 " />
                <div className="flex items-center justify-center ">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">Python</button>
                   
                </div>
            </div>

        </div>

      </div>
    </div>
  )
};

export default Projects;
