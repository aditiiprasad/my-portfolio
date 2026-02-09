import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isJerking, setIsJerking] = useState(false); 
  const [isLoaded, setIsLoaded] = useState(false);   
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    
    document.body.style.overflow = 'hidden';

   
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        
        const diff = Math.random() * 10; 
        const next = prev + diff;
        return next >= 100 ? 100 : next;
      });
    }, 100);

    
    const safetyTimeout = setTimeout(() => {
      setProgress(100);
    }, 2500);

    return () => {
      clearInterval(timer);
      clearTimeout(safetyTimeout);
    };
  }, []);

  
  useEffect(() => {
    if (progress === 100) {
      
      setTimeout(() => {
        setIsJerking(true);
      }, 400);

      
      setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = 'unset';
      }, 800); 

      
      setTimeout(() => {
        setShouldRender(false);
      }, 2000);
    }
  }, [progress]);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center cursor-none
        transition-transform ease-in-out
        ${isLoaded 
            ? '-translate-y-full duration-[1000ms]' 
            : isJerking 
                ? 'translate-y-4 duration-300'       
                : 'translate-y-0 duration-200'       
        }
      `}
      style={{
        backgroundImage: `repeating-linear-gradient(
          0deg,
          #111111,
          #111111 10vh,
          #FCD34D 10vh,
          #FCD34D 10.5vh
        )`,
        backgroundColor: '#111'
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
       
        <div className="text-center mb-10">
          <h1 className="text-custom-yellow font-shrikhand text-4xl md:text-7xl mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] tracking-wider">
            LOADING...
          </h1>
          <div className="font-mono font-bold text-2xl text-white bg-black px-4 py-1 inline-block border-2 border-b-4 border-r-4 border-white">
            {Math.floor(progress)}%
          </div>
        </div>

      
        <div className="w-80 md:w-[500px] h-14 bg-black border-2 border-white border-b-8 border-r-8 rounded-4xl  relative">
          <div 
            className="h-full bg-custom-yellow rounded-4xl transition-all duration-200 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
           
            <div 
              className="absolute inset-0 opacity-20"
              
            ></div>
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        
        <div className="w-64 h-8 bg-yellow-500 rounded-full border-4 border-amber-700 shadow-[0px_10px_20px_rgba(0,0,0,0.8)] relative flex items-center justify-between px-4">
            
            <div className="w-3 h-3 bg-yellow-100 rounded-full border border-black"></div>
            <div className="w-20 h-2 bg-amber-950 rounded-full inset-shadow"></div>
            <div className="w-3 h-3 bg-gray-100 rounded-full border border-black"></div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 h-6 bg-custom-yellow border-t-4 border-custom-yellow"></div>

    </div>
  );
};

export default Preloader;