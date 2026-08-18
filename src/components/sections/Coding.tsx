import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Coding: React.FC<SectionProps> = ({ isOpen, onToggle }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="w-[95%] md:w-[85%] lg:w-[75%] ml-auto relative bg-custom-yellow border-4 border-r-0 border-black shadow-neo"
    >

        <div className="flex items-center justify-between px-6 md:px-10 py-6">
            <h2 className="text-3xl md:text-4xl font-shrikhand text-black uppercase tracking-wide">CODING</h2>
            <button 
              onClick={onToggle} 
              className="bg-black text-custom-yellow px-6 py-2 font-bold border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all uppercase tracking-wider"
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
                    <div className="max-w-2xl mx-auto flex flex-col gap-8">
                        <div className="bg-white border-4 border-black p-8 border-b-8 border-r-8 hover:-translate-y-1 transition-all flex flex-col sm:flex-row items-center gap-6 shadow-neo">
                            <div className="bg-black p-6 rounded-full border-4 border-custom-yellow flex-shrink-0">
                                <span className="text-6xl">⚔️</span>
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-3xl font-shrikhand text-green-700 mb-2">LeetCode Knight</h3>
                                <p className="font-bold text-xl mb-3">
                                    Max Rating 1929 
                                    <span className="bg-custom-yellow px-2 border-2 border-black ml-2 text-sm shadow-sm inline-block -rotate-2">Top 3.74%</span>
                                </p>
                                <p className="text-base font-medium bg-gray-100 p-3 border-2 border-black inline-block mb-3 shadow-[4px_4px_0_rgba(0,0,0,1)]">
                                    <span className="text-custom-red font-bold underline decoration-custom-red">700+ DSA problems solved.</span>
                                </p>
                                <p className="font-mono text-sm font-bold bg-custom-blue text-black p-2 border-2 border-black w-fit shadow-[4px_4px_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
                                    🏆 Rank 140 in Weekly Contest 465
                                </p>
                            </div>
                        </div>

                        {/* LeetCode Stats Image */}
                        <div className="w-full flex justify-center hover:-translate-y-1 transition-transform">
                            <img 
                              src="https://leetcard.jacoblin.cool/aditiiprasad?theme=chartreuse&font=Share%20Tech%20Mono&ext=heatmap" 
                              alt="LeetCode Stats" 
                              className="w-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl bg-white"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.section>
  );
};

export default Coding;
