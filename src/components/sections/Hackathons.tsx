import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Hackathons: React.FC<SectionProps> = ({ isOpen, onToggle }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="w-[95%] md:w-[85%] lg:w-[75%] relative bg-custom-red border-4 border-l-0 border-black shadow-neo"
    >

        <div className="flex items-center justify-between px-6 md:px-10 py-6">
            <h2 className="text-3xl md:text-4xl font-shrikhand text-white uppercase tracking-wide">HACKATHONS</h2>
            <button 
              onClick={onToggle} 
              className="bg-white text-black px-6 py-2 font-bold border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
            >
                {isOpen ? 'Close' : 'Open'}
            </button>
        </div>


        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "linear" }}
              className="overflow-hidden"
            >
                <div className="px-6 md:px-10 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all flex flex-col h-full relative bg-white">
                            <div className="border-b-4 border-black px-3 py-2 flex justify-between items-center bg-custom-yellow">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                </div>
                                <span className="font-mono text-[10px] font-black uppercase tracking-widest">
                                    hackathon.exe
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h3 className="text-xl font-bold leading-snug">Google Girl Hackathon 2025</h3>
                                    <span className="text-3xl flex-shrink-0">🥇</span>
                                </div>
                                <p className="font-bold text-lg mb-2 text-custom-red">Finalist</p>
                                <p className="text-sm font-medium text-gray-700 leading-relaxed border-t-4 border-black border-dashed pt-4 mt-auto">
                                    Top 1% of all applicants.
                                </p>
                            </div>
                        </div>


                        <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all flex flex-col h-full relative bg-white">
                            <div className="border-b-4 border-black px-3 py-2 flex justify-between items-center bg-custom-blue">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                </div>
                                <span className="font-mono text-[10px] font-black uppercase tracking-widest">
                                    hackathon.exe
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h3 className="text-xl font-bold leading-snug">Flipkart Grid 7.0</h3>
                                    <span className="text-3xl flex-shrink-0">🥈</span>
                                </div>
                                <p className="font-bold text-lg mb-2 text-custom-blue">Semi-Finalist</p>
                                <p className="text-sm font-medium text-gray-700 leading-relaxed border-t-4 border-black border-dashed pt-4 mt-auto">
                                    Top students out of 1.5 lakh+ participants.
                                </p>
                            </div>
                        </div>


                        <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all flex flex-col h-full relative bg-white">
                            <div className="border-b-4 border-black px-3 py-2 flex justify-between items-center bg-custom-green">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                </div>
                                <span className="font-mono text-[10px] font-black uppercase tracking-widest">
                                    hackathon.exe
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h3 className="text-xl font-bold leading-snug">Data Science Summit’24</h3>
                                    <span className="text-3xl flex-shrink-0">🥈</span>
                                </div>
                                <p className="font-bold text-lg mb-2 text-custom-green">2nd Place</p>
                                <p className="text-sm font-medium text-gray-700 leading-relaxed border-t-4 border-black border-dashed pt-4 mt-auto">
                                    Out of 150+ teams.
                                </p>
                            </div>
                        </div>


                        <div className="border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-all flex flex-col h-full relative bg-white">
                            <div className="border-b-4 border-black px-3 py-2 flex justify-between items-center bg-custom-pink">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                    <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
                                </div>
                                <span className="font-mono text-[10px] font-black uppercase tracking-widest">
                                    hackathon.exe
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4 gap-4">
                                    <h3 className="text-xl font-bold leading-snug">Monad Blitz Bangalore v4</h3>
                                    <span className="text-3xl flex-shrink-0">🏆</span>
                                </div>
                                <p className="font-bold text-lg mb-2 text-custom-purple">Top 10</p>
                                <p className="text-sm font-medium text-gray-700 leading-relaxed border-t-4 border-black border-dashed pt-4 mt-auto">
                                    Blockchain and AI Hackathon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.section>
  );
};

export default Hackathons;
