"use client"; // Mark this component as a client component

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          🎥 <span className="ml-2">MovieRecommender</span>
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-gray-400 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition duration-300">
            About
          </Link>
          <Link href="/signin" className="hover:text-gray-400 transition duration-300">
            Sign In
          </Link>
          <Link href="/signup" className="hover:text-gray-400 transition duration-300">
            Sign Up
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <Link href="/" className="block py-2 hover:text-gray-400 transition duration-300">
            Home
          </Link>
          <Link href="/about" className="block py-2 hover:text-gray-400 transition duration-300">
            About
          </Link>
          <Link href="/signin" className="block py-2 hover:text-gray-400 transition duration-300">
            Sign In
          </Link>
          <Link href="/signup" className="block py-2 hover:text-gray-400 transition duration-300">
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
