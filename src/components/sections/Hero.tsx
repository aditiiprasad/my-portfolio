import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaCode, FaDownload, FaEnvelope, FaExclamationTriangle, FaTwitter, FaMedium, FaInstagram } from 'react-icons/fa';
import ContactModal from '../ui/ContactModal';
import MiniTerminal from '../ui/MiniTerminal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <section className="pt-4 pb-10 px-4 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-start justify-center">


      <div className="w-full md:w-1/3 bg-white border-2 border-b-4 border-r-4 border-black rounded-3xl p-6 shadow-neo flex flex-col items-center text-center relative overflow-hidden">

        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gray-200/50 w-20 h-6 rotate-[-5deg] border border-gray-400"></div>


        <div className="w-32 h-32 bg-custom-pink rounded-full border-4 border-black mb-4 flex items-center justify-center text-4xl overflow-hidden">
          <img
            src="/aditi.png"
            alt="Aditi"
            className="w-full h-full object-cover"
          />

        </div>

        <h1 className="text-4xl font-shrikhand mb-1">ADITI</h1>
        <div className="bg-black text-white px-3 py-1 font-mono text-sm rounded-md mb-4 rotate-1">
          FULL_STACK_DEVELOPER()
        </div>

        <div className="w-full space-y-3 text-left font-bold text-sm font-mono border-t-2 border-black pt-4">
          <div>
            <span className="bg-custom-yellow px-1 border border-black mr-2">[LOCATION]</span>
            GURUGRAM, HARYANA
          </div>
          <div>
            <span className="bg-custom-green px-1 border border-black mr-2">[STATUS]</span>
            4th YEAR BTECH STUDENT
          </div>
          <div>
            <span className="bg-custom-blue px-1 border border-black mr-2">[MISSION]</span>
            Code. Play. Chill.
          </div>
        </div>


        <div className="w-full flex flex-col gap-3 mt-6">
          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="bg-custom-green w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaDownload /> DOWNLOAD_RESUME
          </button>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-custom-red text-white w-full py-3 rounded-xl border-2 border-black font-bold shadow-neo-sm hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FaEnvelope /> CONTACT ME
          </button>
        </div>


        <div className="flex gap-4 mt-6 text-2xl flex-wrap justify-center">
          <a href="mailto:aditi03prasad@gmail.com" className="hover:scale-110 transition-transform text-red-500"><FaEnvelope /></a>
          <a href="https://github.com/aditiiprasad" target="_blank" className="hover:scale-110 transition-transform"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/aditiiprasad/" target="_blank" className="hover:scale-110 transition-transform text-blue-700"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/aditiiprasad/" target="_blank" className="hover:scale-110 transition-transform text-orange-600"><FaCode /></a>
          <a href="https://twitter.com/aditiiprasad" target="_blank" className="hover:scale-110 transition-transform text-black"><FaTwitter /></a>
          <a href="https://medium.com/@aditiiprasad" target="_blank" className="hover:scale-110 transition-transform text-black"><FaMedium /></a>
          <a href="https://instagram.com/aditiiprasad" target="_blank" className="hover:scale-110 transition-transform text-pink-600"><FaInstagram /></a>
        </div>
      </div>


      <div className="w-full md:w-2/3 flex flex-col gap-6" id="about">

        <div className="bg-custom-yellow p-6 md:p-10 rounded-3xl border-2 border-b-4 border-r-4 border-black shadow-neo">
          <h2 className="text-4xl font-shrikhand mb-6">Hi people!</h2>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I am a <span className="font-bold bg-white px-1 border border-black">4th-year (final) student at BIT Mesra</span>, pursuing a Bachelor of Technology in Computer Science and Engineering. I define myself as a <span className="font-bold bg-white px-1 border border-black">Woman in STEM</span> aspiring to build scalable software.
          </p>
          <p className="text-lg font-medium leading-relaxed mb-4">
            I have strong aptitude, technical, and communication skills, and a logical approach to problem-solving. My diverse schooling across India has made me adaptable and eager to create.
          </p>
          <div className="bg-white p-4 border-2 border-black rounded-xl inline-block font-bold shadow-neo-sm ">
            🚀 Open to Software and Research Internships
          </div>
        </div>

        <MiniTerminal />
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {isResumeModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[70] p-4">
          <div className="bg-white w-full max-w-sm border-4 border-black rounded-3xl p-8 shadow-neo relative animate-bounce-in text-center flex flex-col items-center">
            <div className="text-7xl text-custom-yellow mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
              <FaExclamationTriangle />
            </div>
            <h2 className="text-3xl font-shrikhand mb-4 uppercase">Privacy Notice</h2>
            <p className="font-bold text-lg border-2 border-black p-4 bg-gray-100 rounded-xl leading-snug">
              Removed resume due to privacy concerns!
            </p>
            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="mt-8 w-full bg-custom-red text-white font-bold py-3 border-4 border-black rounded-xl shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all cursor-pointer uppercase tracking-wider"
            >
              UNDERSTAND
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Hero;