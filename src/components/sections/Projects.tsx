import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, tools, description, link, color }: any) => (
  <div className={`bg-white border-4 border-black rounded-3xl p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden`}>
    
    
    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>
    
    <div className="mt-4 flex justify-between items-start mb-4">
        <div>
            <h3 className="text-2xl font-shrikhand">{title}</h3>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse">
                LIVE PROJECT
            </span>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <FaExternalLinkAlt />
        </a>
    </div>

    
    <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((t: string) => (
            <span key={t} className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md">
                {t}
            </span>
        ))}
    </div>

   
    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
        {description.map((point: string, i: number) => (
            <li key={i}>{point}</li>
        ))}
    </ul>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "LagFree",
      color: "bg-custom-blue",
      tools: ["Python", "Flask", "scikit-fuzzy", "React", "HLS.js"],
      link: "https://lagfree.vercel.app/", 
      description: [
        "Engineered a Mamdani Fuzzy Inference System (FIS) to process real-time network telemetry.",
        "Architected a 3-tier system (React, Node.js, Python) to visualize AI impact on QoE.",
        "Optimized bitrate decisions based on bandwidth, buffer, and delay."
      ]
    },
    {
      title: "DripTrack",
      color: "bg-custom-pink",
      tools: ["MERN Stack", "JWT", "Cloudinary", "Chart.js", "Gemini AI"],
      link: "https://drip-track.vercel.app/",
      description: [
        "Scalable full-stack wardrobe manager handling large-scale user data.",
        "Implemented secure JWT authentication and authorization.",
        "Integrated Google Gemini AI for real-time fashion advice.",
        "Leveraged Cloudinary for distributed media storage."
      ]
    },
    {
      title: "WhatsStat",
      color: "bg-custom-green",
      tools: ["Python", "Streamlit", "Pandas", "NLP", "Seaborn"],
      link: "https://whatsstat.streamlit.app/", 
      description: [
        "Data processing pipeline parsing 10,000+ messages from chat logs.",
        "Implemented NLP models achieving 90% accuracy in sentiment analysis.",
        "Generated dynamic visualizations (heatmaps, word clouds) for chat behavior."
      ]
    }
  ];

  return (
    <section id="projects" className="py-10 px-4 max-w-7xl mx-auto bg-custom-yellow border-4 border-black rounded-3xl shadow-neo">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo transform -rotate-1">
            <h2 className="text-3xl font-shrikhand text-white">PROJECTS 🏗️</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;