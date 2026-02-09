import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-custom-yellow border-y-4 border-black py-3 overflow-hidden whitespace-nowrap relative rotate-[-2deg] scale-105 z-20 my-10">
      <div className="animate-marquee inline-block font-shrikhand text-2xl">
        <span className="mx-4">OPEN TO OPPORTUNITIES 🚀</span>
        <span className="mx-4">FULL-STACK ENGINEER 💻</span>
        <span className="mx-4">REACT • NODE • MONGODB • PYTHON ⚡</span>
        <span className="mx-4">BUILDING REAL-WORLD PRODUCTS 🛠️</span>
        <span className="mx-4">AVAILABLE FOR INTERNSHIPS & ROLES 💼</span>

        <span className="mx-4">OPEN TO OPPORTUNITIES 🚀</span>
        <span className="mx-4">FULL-STACK ENGINEER 💻</span>
        <span className="mx-4">REACT • NODE • MONGODB • PYTHON ⚡</span>
        <span className="mx-4">BUILDING REAL-WORLD PRODUCTS 🛠️</span>
        <span className="mx-4">AVAILABLE FOR INTERNSHIPS & ROLES 💼</span>
      </div>

      
      <div className="animate-marquee inline-block font-shrikhand text-2xl absolute top-3 left-0">
        <span className="mx-4">OPEN TO OPPORTUNITIES 🚀</span>
        <span className="mx-4">FULL-STACK ENGINEER 💻</span>
        <span className="mx-4">REACT • NODE • MONGODB • PYTHON ⚡</span>
        <span className="mx-4">BUILDING REAL-WORLD PRODUCTS 🛠️</span>
        <span className="mx-4">AVAILABLE FOR INTERNSHIPS & ROLES 💼</span>

        <span className="mx-4">OPEN TO OPPORTUNITIES 🚀</span>
        <span className="mx-4">FULL-STACK ENGINEER 💻</span>
        <span className="mx-4">REACT • NODE • MONGODB • PYTHON ⚡</span>
        <span className="mx-4">BUILDING REAL-WORLD PRODUCTS 🛠️</span>
        <span className="mx-4">AVAILABLE FOR INTERNSHIPS & ROLES 💼</span>
      </div>
    </div>
  );
};

export default Marquee;