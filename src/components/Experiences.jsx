import React from 'react';
import python from '../assets/my_portfolio/python.jpg';
import HTML from '../assets/my_portfolio/HTML.jpg';
import css from '../assets/my_portfolio/css.jpg';
import npm from '../assets/my_portfolio/npm.jpg';
import react from '../assets/my_portfolio/react.jpg';

const Experiences = () => {

    const experiences = [
        {
            id: 1,
            src: HTML,
            title: 'HTML'
        },

        {
            id: 2,
            src: css,
            title: 'CSS'
        },

        {
            id: 3,
            src: npm,
            title: 'npm'
        },

        {
            id: 4,
            src: react,
            title: 'React'
        },

        {
            id: 5,
            src: python,
            title: 'Python'
        },

        
    ]
  return (
    <div name="Experiences" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen  ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Experiences</p>
            <p className="py-6 ">Check out some of my Experiences right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  ">








        {
            experiences.map(({id, src, title}) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105 " />
                <div className="flex items-center justify-center ">
                    <p className="mt-2">{title}</p>
                </div>
            </div>

                
            ))
            
            
              
        }

        
           

        </div>

      </div>
    </div>
  )
};

export default Experiences;
