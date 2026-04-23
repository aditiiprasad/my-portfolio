import React, { useRef, useState, useEffect } from 'react';
import { FaEraser, FaPencilAlt, FaTrash } from 'react-icons/fa';


interface EduProps {
  year: string;
  title: string;
  place: string;
  details: React.ReactNode;
  color: string;
}


const EduCard = ({ year, title, place, details, color }: EduProps) => (
  <div className={`relative bg-white border-4 border-black p-6 rounded-3xl shadow-neo hover:-translate-y-1 transition-transform ${color}`}>

    <div className="absolute -top-4 -left-4 bg-black text-white font-mono font-bold py-1 px-3 rounded-lg border-2 border-white shadow-sm rotate-[-5deg]">
      {year}
    </div>
    
    <div className="mt-2">
      <h3 className="text-xl font-shrikhand leading-tight mb-1">{title}</h3>
      <p className="font-bold text-sm text-gray-700 mb-2">{place}</p>
      <div className="text-sm font-medium bg-white/60 p-2 rounded-lg border-2 border-black/10">
        {details}
      </div>
    </div>
  </div>
);


const Blackboard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#ffffff'); // Default White Chalk
  const [brushSize, setBrushSize] = useState(4);

  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize;
      }
    }
  }, []);

  
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas && canvas.parentElement) {
        
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        tempCtx?.drawImage(canvas, 0, 0);

        
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;

       
        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.drawImage(tempCanvas, 0, 0);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = color;
            ctx.lineWidth = brushSize;
        }
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [color, brushSize]);

 
  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;

    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { offsetX, offsetY } = getCoordinates(e, canvas);
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  };

  const stopDrawing = () => {
    const canvas = canvasRef.current;
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx?.closePath();
    }
    setIsDrawing(false);
  };

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    
    if ('touches' in e) {
      const touch = e.touches[0];
      const rect = canvas.getBoundingClientRect();
      return {
        offsetX: touch.clientX - rect.left,
        offsetY: touch.clientY - rect.top
      };
    } else {
      
      return {
        offsetX: e.nativeEvent.offsetX,
        offsetY: e.nativeEvent.offsetY
      };
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return (
    <div className="h-[400px] md:h-[600px] w-full bg-[#2a2a2a] border-8 border-custom-yellow rounded-3xl shadow-neo relative overflow-hidden group">
      
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-chalk.png')]"></div>
      
      
      <div className="absolute top-4 left-4 z-10 flex gap-2 bg-white/10 backdrop-blur-sm p-2 rounded-xl border-2 border-white/20">
        <button 
          onClick={() => { setColor('#ffffff'); setBrushSize(4); }}
          className={`p-2 rounded-lg transition-all ${color === '#ffffff' ? 'bg-white text-black scale-110' : 'text-white hover:bg-white/20'}`}
          title="White Chalk"
        >
          <FaPencilAlt />
        </button>
        <button 
          onClick={() => { setColor('#FCD34D'); setBrushSize(4); }}
          className={`p-2 rounded-lg transition-all ${color === '#FCD34D' ? 'bg-custom-yellow text-black scale-110' : 'text-custom-yellow hover:bg-white/20'}`}
          title="Yellow Chalk"
        >
          <FaPencilAlt />
        </button>
        <button 
          onClick={() => { setColor('#F87171'); setBrushSize(4); }}
          className={`p-2 rounded-lg transition-all ${color === '#F87171' ? 'bg-custom-red text-black scale-110' : 'text-custom-red hover:bg-white/20'}`}
          title="Red Chalk"
        >
          <FaPencilAlt />
        </button>
        <div className="w-px bg-white/30 mx-1"></div>
        <button 
          onClick={clearCanvas}
          className="p-2 text-white hover:text-red-400 hover:rotate-12 transition-all"
          title="Clear Board"
        >
          <FaTrash />
        </button>
      </div>

     
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 font-shrikhand text-4xl pointer-events-none select-none">
        DRAW HERE!
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
        className="cursor-crosshair w-full h-full relative z-0 touch-none"
      />
    </div>
  );
};


const Education = () => {
  const educationData = [
    {
      year: "2023-2027",
      title: "B.Tech CSE",
      place: "Birla Institute of Technology, Mesra",
      color: "bg-purple-100",
      details: (
        <ul className="list-disc list-inside">
          <li>Relevant Coursework: DSA, OOP, DBMS, OS</li>
          <li>Focus: Full Stack Development & AI</li>
        </ul>
      )
    },
    {
      year: "XII",
      title: "Senior Secondary",
      place: "Kendriya Vidyalaya No.2 AFS Jodhpur",
      color: "bg-blue-100",
      details: "CBSE Board | Percentage: 89.4%"
    },
    {
      year: "X",
      title: "Secondary Education",
      place: "Kendriya Vidyalaya No.2 AFS Jodhpur",
      color: "bg-green-100",
      details: "CBSE Board | Percentage: 89.4%"
    }
  ];

  return (
    <section id="education" className="py-10 px-4 max-w-7xl mx-8 bg-custom-green border-4 border-black rounded-3xl shadow-neo">
        
        <div className="flex justify-center mb-10">
            <div className="bg-white px-8 py-3 rounded-full border-4 border-black w-fit shadow-neo ">
                <h2 className="text-3xl font-shrikhand">EDUCATION 🎨</h2>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            
            <div className="w-full lg:w-1/3 flex flex-col gap-8 relative">
               
                <div className="absolute left-8 top-10 bottom-10 w-1 bg-black border-l-4 border-black border-dashed -z-10 opacity-30"></div>
                
                {educationData.map((edu, index) => (
                    <EduCard key={index} {...edu} />
                ))}
            </div>

           
            <div className="w-full lg:w-2/3 sticky top-24">
                <Blackboard />
                <p className="text-center font-mono font-bold mt-4 bg-white inline-block px-4 py-1 border-2 border-black rounded-full shadow-sm mx-auto block w-fit">
                    ✨ Bored? Doodle something cool!
                </p>
            </div>

        </div>
    </section>
  );
};

export default Education;