import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ContactModal from '../ui/ContactModal';

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'numeric', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const navLinks = [
    { name: 'ABOUT', id: 'about' },
    { name: 'EDUCATION', id: 'education' },
    { name: 'SKILLS', id: 'skills' },
    { name: 'PROJECTS', id: 'projects' },
    { name: 'EXTRA-CURRICULARS', id: 'extra' },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 bg-custom-purple border-4 border-black rounded-full px-4 py-3 shadow-neo flex justify-between items-center max-w-7xl mx-auto">
        
        <div className="text-xl md:text-2xl font-shrikhand text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)] ml-2">
          PORTFOLIO
        </div>

        <div className="hidden lg:flex gap-3 font-bold text-sm items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 bg-white text-black rounded-full border-black border-b-4 border-r-4 border-2 
                         hover:bg-white hover:text-black hover:border-black hover:border-b-2 hover:border-r-2 
                         active:border-b-2 active:border-r-2 active:translate-y-1 transition-all cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="px-5 py-2 bg-custom-pink text-black border-2 border-black border-b-8 border-r-8 rounded-full 
                       hover:border-b-4 hover:border-r-4 active:translate-y-1 transition-all cursor-pointer"
          >
            CONTACT
          </button>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-custom-yellow text-black px-4 py-1 rounded-full font-mono text-sm border-black border-2 border-b-4 border-r-4">
          <span>█</span>
          <span>{formatDate(currentTime)}</span>
        </div>

        <button 
          className="lg:hidden text-white text-2xl bg-black p-2 rounded-full border-2 border-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed top-24 left-4 right-4 z-40 bg-custom-purple border-4 border-black rounded-3xl p-4 flex flex-col gap-3 shadow-neo animate-bounce-in lg:hidden max-w-7xl mx-auto">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="bg-white border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left hover:bg-gray-100 transition-all"
            >
              {link.name}
            </button>
          ))}
          <button
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
              className="bg-custom-pink border-2 border-black border-b-4 border-r-4 p-3 rounded-xl font-bold active:border-b-2 active:border-r-2 active:translate-y-1 text-left transition-all"
            >
              CONTACT
          </button>
           
           <div className="flex md:hidden items-center gap-2 bg-custom-yellow text-black px-4 py-3 rounded-xl font-mono text-sm border-black border-2 border-b-4 border-r-4 justify-center">
            <span>█</span>
            <span>{formatDate(currentTime)}</span>
          </div>
        </div>
      )}

      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Taskbar;