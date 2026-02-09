import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
       
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      
      <style>{`
        body, button, a, div { cursor: none !important; }
      `}</style>

     
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ marginLeft: '-2px', marginTop: '-2px' }} 
      >
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <path 
            d="M5.5 2L18 13.5L11.5 13.5L15 21L12 22L8.5 14.5L2.5 19.5L5.5 2Z" 
            fill="#FF9FAC"   
            stroke="black"   
            strokeWidth="2"  
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;