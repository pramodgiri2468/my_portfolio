import React from 'react';
import { FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-20 text-white
    bg-black fixed px-4">
        <div>
            <h1 className="text-5xl font-signature ml-2">Pramod</h1>
        </div>

        <ul className="flex">
            <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 capitalize duration-200">home</li>
            <li className="">Home</li>


        </ul>
    </div>

  )
}

export default Navbar
