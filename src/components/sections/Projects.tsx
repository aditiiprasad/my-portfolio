import React from 'react';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const ProjectCard = ({ title, tools, description, link, color }: any) => (
  <div className={`bg-white border-4 border-black rounded-3xl  p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden`}>
    
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
        title: "Traitors",
        color: "bg-custom-purple", 
        tools: ["Python", "FastAPI", "React", "Groq API", "Llama-3"],
        link: "https://traitors-sepia.vercel.app/", 
        description: [
          "Built a full-stack multiplayer deduction game with autonomous AI agents using Groq Llama-3 API.",
          "Engineered a custom FastAPI backend for state management and an asynchronous 'AI Heartbeat' system.",
          "Implemented role-based prompt engineering to force asymmetric information distribution.",
          "Designed a modular React frontend featuring a custom 8-bit 'Pixel Palace' aesthetic."
        ]
      },
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
        title: "Misinfo Drift Detector",
        color: "bg-custom-red",
        tools: ["ML", "NLP", "Transformers", "XGBoost", "Streamlit"],
        link: "https://github.com/aditiiprasad/misinformation-drift-detector", 
        description: [
          "Engineered an ML pipeline using XGBoost to track and quantify semantic mutation of social media messages.",
          "Integrated HuggingFace Transformers for zero-shot exaggeration detection and semantic drift computation.",
          "Modeled complex conversational trees into DAGs using NetworkX to extract structural features.",
          "Developed a Streamlit dashboard with real-time text-mutation highlighting and live Plotly network rendering."
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
      },
      {
  title: "Electron Activity Tracker",
  color: "bg-custom-yellow",
  tools: ["Electron", "JavaScript", "HTML", "CSS", "active-win"],
  link: "https://github.com/aditiiprasad/electron-activity-tracker",
  description: [
    "Developed a desktop monitoring application using Electron to track real-time user interactions including keyboard, mouse, scroll, and window focus events.",
    "Integrated the active-win library to capture and analyze foreground application usage patterns across the system.",
    "Engineered a responsive dashboard to visualize activity logs and identify most-used applications dynamically.",
    "Implemented event-driven architecture to stream live activity updates from the main process to the renderer process."
  ]
}

    ];

  return (
    <section id="projects" className="py-10 px-4 mx-8 max-w-7xl  bg-custom-yellow border-4 border-black rounded-3xl shadow-neo">
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