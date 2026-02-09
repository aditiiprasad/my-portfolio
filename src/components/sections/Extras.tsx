import React from 'react';
import { FaTrophy, FaHandHoldingHeart, FaBullhorn } from 'react-icons/fa';

const Extras = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        
        <div id="extra" className="flex flex-col gap-6">
            <div className="bg-custom-green px-6 py-2 border-4 border-black w-fit shadow-neo -rotate-1">
                <h2 className="text-2xl font-shrikhand text-white">BEYOND CODE 🏃🏻‍♀️</h2>
            </div>

            <div className="bg-white border-4 border-black p-6 rounded-3xl shadow-neo hover:scale-[1.01] transition-transform">
                <div className="flex items-center gap-3 mb-2">
                    <FaHandHoldingHeart className="text-2xl text-custom-red"/>
                    <h3 className="text-xl font-bold">Volunteer @ NSS</h3>
                </div>
                <p className="text-sm font-mono bg-gray-100 inline-block px-2 border border-black rounded mb-2">2023 - Present</p>
                <p className="text-sm">Contributed to educational initiatives, positively impacting 50+ students in Jharkhand by bridging the learning gap.</p>
            </div>

            <div className="bg-white border-4 border-black p-6 rounded-3xl shadow-neo hover:scale-[1.01] transition-transform">
                <div className="flex items-center gap-3 mb-2">
                    <FaBullhorn className="text-2xl text-custom-blue"/>
                    <h3 className="text-xl font-bold">Member @ Aakshar</h3>
                </div>
                <p className="text-sm font-mono bg-gray-100 inline-block px-2 border border-black rounded mb-2">2024 - Present</p>
                <p className="text-sm">Directed content creation strategies (30% engagement growth). Hosted/anchored major college fests for 500+ students.</p>
            </div>
        </div>

     
        <div id="achievements" className="flex flex-col gap-6">
            <div className="bg-custom-yellow px-6 py-2 border-4 border-black w-fit shadow-neo rotate-1 ml-auto">
                <h2 className="text-2xl font-shrikhand text-black">TROPHY CASE 🏆</h2>
            </div>

            <div className="bg-black text-white border-4 border-white p-6 rounded-3xl shadow-[8px_8px_0px_0px_rgba(255,159,172,1)]">
                <ul className="space-y-4">
                    <li className="flex gap-3 items-start">
                        <span className="text-custom-yellow text-xl">🥇</span>
                        <div>
                            <span className="font-bold text-lg text-custom-pink">Finalist, Google Girl Hackathon 2025</span>
                            <p className="text-sm text-gray-300">Top 1% of all applicants.</p>
                        </div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-gray-300 text-xl">🥈</span>
                        <div>
                            <span className="font-bold text-lg">Semi-Finalist, Flipkart Grid 7.0</span>
                            <p className="text-sm text-gray-300">Top students out of 1.5 lakh+ participants.</p>
                        </div>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-orange-400 text-xl">🥈</span>
                        <div>
                            <span className="font-bold text-lg">2nd Place, Data Science Summit’24</span>
                            <p className="text-sm text-gray-300">Out of 150+ teams.</p>
                        </div>
                    </li>
                     <li className="flex gap-3 items-start">
                        <span className="text-custom-green text-xl">⚔️</span>
                        <div>
                            <span className="font-bold text-lg">LeetCode Knight</span>
                            <p className="text-sm text-gray-300">Top 5.12% globally. 550+ DSA problems solved.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </section>
  );
};

export default Extras;