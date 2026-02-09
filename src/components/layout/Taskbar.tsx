import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Taskbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
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
    { name: 'ACHIEVEMENTS', id: 'achievements' },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-custom-purple border-b-4 border-black px-4 py-3 shadow-neo">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
       
        <div className="text-xl md:text-2xl font-shrikhand text-white drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
          [PORTFOLIO👧🏻]
        </div>

        
        <div className="hidden lg:flex gap-6 font-bold text-sm bg-white px-6 py-2 rounded-full border-2 border-black shadow-neo-sm">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="hover:text-custom-pink hover:underline decoration-4 underline-offset-4 transition-all"
            >
              {link.name}
            </button>
          ))}
          <button onClick={() => scrollToSection('contact')} className="hover:text-custom-pink hover:underline decoration-4 underline-offset-4 transition-all">
            CONTACT
          </button>
        </div>

       
        <div className="hidden md:flex items-center gap-2 bg-black text-custom-yellow px-4 py-1 rounded-md font-mono text-sm border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
          <span>█</span>
          <span>{formatDate(currentTime)}</span>
        </div>

        
        <button 
          className="lg:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-custom-purple border-b-4 border-black p-4 flex flex-col gap-4 shadow-neo">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="bg-white border-2 border-black p-2 font-bold shadow-neo-sm text-left"
            >
              {link.name}
            </button>
          ))}
           
           <div className="flex md:hidden items-center gap-2 bg-black text-custom-yellow px-4 py-2 rounded-md font-mono text-sm border-2 border-white">
            <span>█</span>
            <span>{formatDate(currentTime)}</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Taskbar;