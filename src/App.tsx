import React from 'react';
import Taskbar from './components/layout/Taskbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Extras from './components/sections/Extras';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-custom-purple overflow-x-hidden selection:bg-custom-yellow selection:text-black">
     
      <Taskbar />
      
     
      <main className="flex flex-col gap-10">
        
       
        <Hero />
        
        
        <Skills />
       
        <Projects />
        
    
        <Education />
        
        
        <Extras />
        
      </main>

     
      <Footer />
    </div>
  );
}

export default App;