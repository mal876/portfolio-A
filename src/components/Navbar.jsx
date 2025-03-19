import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <nav className="bg-sky-600 flex justify-between items-center text-white py-6 px-8 md:px-32 md:h-full md:w-full shadow-lg transition-all duration-300 ease-in-out hover:bg-sky-700">
          <Link to="/">
            <h3 className="text-4xl font-semibold tracking-wider transform transition duration-300 hover:scale-110 hover:text-amber-400">
              Mal.
            </h3>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-12 text-base font-semibold">
            <li className="p-2 transition-all cursor-pointer transform hover:scale-110 duration-300 hover:text-amber-400 hover:underline hover:underline-offset-8">
              <Link to="/about">About</Link>
            </li>
            <li className="p-2 transition-all cursor-pointer transform hover:scale-110 duration-300 hover:text-amber-400 hover:underline hover:underline-offset-8">
              <Link to="/project">Projects</Link>
            </li>
            <li className="p-2 transition-all cursor-pointer transform hover:scale-110 duration-300 hover:text-amber-400 hover:underline hover:underline-offset-8">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <i
            className="bx bx-menu xl:hidden block text-5xl cursor-pointer text-amber-300 hover:text-amber-500 transition duration-300 ease-in-out"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            } absolute xl:hidden top-24 left-0 w-full bg-sky-700 text-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-all duration-300 ease-in-out shadow-xl rounded-lg`}
          >
            <li className="list-none p-4 transition-all cursor-pointer transform hover:scale-110 duration-300 hover:text-amber-400 hover:underline hover:underline-offset-8">
              <Link to="/about">About</Link>
            </li>
            <li className="list-none p-4 transition-all cursor-pointer transform hover:scale-110 duration-300 hover:text-amber-400 hover:underline hover:underline-offset-8">
              <Link to="/project">Projects</Link>
            </li>
            <li className="list-none p-4 transition-all cursor-pointer transform hover:scale-110 duration-300 hover:text-amber-400 hover:underline hover:underline-offset-8">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </nav>

        <main>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="project" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
