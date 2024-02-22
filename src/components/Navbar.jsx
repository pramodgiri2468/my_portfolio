import React, { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
      path: '/' // Define the path for each link
    },
    {
      id: 2,
      link: 'about',
      path: '/about'
    },
    {
      id: 3,
      link: 'experiences',
      path: '/experiences'
    },
    {
      id: 5,
      link: 'contact',
      path: '/contact'
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Portfolio</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, path }) => (
          <li key={id} className="px-4">
            <Link to={path} className="font-medium text-gray-500 hover:scale-105 capitalize duration-200">{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-50 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, path }) => (
            <li key={id} className="px-4">
              <Link onClick={() => setNav(!nav)} to={path} className="font-medium text-gray-500 hover:scale-105 capitalize duration-200">{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
