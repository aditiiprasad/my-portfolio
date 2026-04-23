import React from 'react';
import { FaTrophy, FaHandHoldingHeart, FaBullhorn } from 'react-icons/fa';

const Extras = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-custom-red border-4 border-black rounded-3xl shadow-neo">
        
        
        <div id="extra" className="flex flex-col gap-8 relative z-10">
          
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-custom-pink rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            
            <div className="bg-custom-green px-8 py-3 border-4 border-black w-fit shadow-neo rounded-full">
                <h2 className="text-3xl font-shrikhand text-black">BEYOND CODE 🏃🏻‍♀️</h2>
            </div>

          
            <div className="bg-white border-4 border-black p-6 rounded-[3rem] border-b-8 border-r-8  relative group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative ">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-custom-yellow rounded-full border-4 border-black overflow-hidden shadow-neo group-hover:scale-110 transition-transform z-20">
                    <img src="/nss.jpg" alt="NSS" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex items-center gap-3 mb-3 pr-16">
                    <FaHandHoldingHeart className="text-3xl text-custom-red"/>
                    <h3 className="text-2xl font-shrikhand">Volunteer @ NSS</h3>
                </div>
                <p className="text-sm font-mono bg-custom-blue text-black font-bold inline-block px-3 py-1 border-2 border-black rounded-full mb-4 shadow-sm">
                    2023 - Present
                </p>
                <p className="text-base font-medium leading-relaxed bg-gray-100 p-4 rounded-2xl border-2 border-black">
                    Contributed to educational initiatives, positively impacting <span className="font-bold bg-custom-yellow px-1 border border-black">50+ students</span> in Jharkhand by bridging the learning gap.
                </p>
            </div>

            
            <div className="bg-white border-4 border-black p-6 rounded-[3rem] border-b-8 border-r-8  relative group group hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative">
                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-custom-pink rounded-full border-4 border-black overflow-hidden shadow-neo group-hover:scale-110 transition-transform z-20">
                    <img src="/lit.jpg" alt="Aakshar" className="w-full h-full object-cover" />
                </div>

                <div className="flex items-center gap-3 mb-3 pr-16">
                    <FaBullhorn className="text-3xl text-custom-blue"/>
                    <h3 className="text-2xl font-shrikhand">Member @ Aakshar</h3>
                </div>
                <p className="text-sm font-mono bg-custom-green text-black font-bold inline-block px-3 py-1 border-2 border-black rounded-full mb-4 shadow-sm">
                    2024 - Present
                </p>
                <p className="text-base font-medium leading-relaxed bg-gray-100 p-4 rounded-2xl border-2 border-black">
                    Directed content creation strategies (<span className="font-bold bg-custom-pink px-1 border border-black">30% engagement growth</span>). Hosted/anchored major college fests for <span className="font-bold">500+ students</span>.
                </p>
            </div>
        </div>

        
        <div id="achievements" className="flex flex-col gap-8 relative z-10 lg:mt-20">
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-custom-yellow rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="bg-black px-8 py-3 border-4 rounded-4xl border-white w-fit  ">
                <h2 className="text-3xl font-shrikhand text-custom-yellow">CODING 🏆</h2>
            </div>

            <div className="bg-custom-yellow text-black border-4 p-8 rounded-[3rem] border-b-8 border-r-8  relative overflow-hidden group">
                
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-black to-black animate-pulse"></div>
                
                <ul className="space-y-6 relative z-10">
                    <li className="flex gap-4 items-start  transition-transform">
                        <div className="bg-white p-2 rounded-full border-2 border-black shadow-sm">
                            <span className="text-2xl">🥇</span>
                        </div>
                        <div>
                            <span className="font-shrikhand text-xl text-red-500">Finalist, Google Girl Hackathon 2025</span>
                            <p className="text-sm font-bold text-black/80 mt-1 bg-black/10 px-2 py-1 rounded-md inline-block border border-black/30">Top 1% of all applicants.</p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start  transition-transform">
                        <div className="bg-white p-2 rounded-full border-2 border-black shadow-sm">
                            <span className="text-2xl">🥈</span>
                        </div>
                        <div>
                            <span className="font-shrikhand text-xl">Semi-Finalist, Flipkart Grid 7.0</span>
                            <p className="text-sm font-bold text-black/80 mt-1 bg-black/10 px-2 py-1 rounded-md inline-block border border-black/30">Top students out of 1.5 lakh+ participants.</p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-start  transition-transform">
                        <div className="bg-white p-2 rounded-full border-2 border-black shadow-sm">
                             <span className="text-2xl">🥈</span>
                        </div>
                        <div>
                            <span className="font-shrikhand text-xl">2nd Place, Data Science Summit’24</span>
                            <p className="text-sm font-bold  text-black/80 mt-1 bg-black/10 px-2 py-1 rounded-md inline-block border border-black/30">Out of 150+ teams.</p>
                        </div>
                    </li>
                     <li className="flex gap-4 items-start  transition-transform">
                        <div className="bg-white p-2 rounded-full border-2 border-black shadow-sm">
                            <span className="text-2xl">⚔️</span>
                        </div>
                        <div>
                            <span className="font-shrikhand text-xl text-green-700">LeetCode Knight</span>
                            <p className="text-sm font-bold  text-black/80 mt-1 bg-black/10 px-2 py-1 rounded-md inline-block border border-black/30">Top 5.12% globally. <span className="text-custom-red underline decoration-custom-red">650+ DSA problems solved.</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </section>
  );
};

export default Extras;