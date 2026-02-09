import React from 'react';

const EduCard = ({ year, title, place, details, color }: any) => (
  <div className="flex flex-col md:flex-row gap-4 relative">

    <div className="md:w-32 flex-shrink-0">
        <div className="bg-black text-white font-mono font-bold py-2 px-4 rounded-xl border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center">
            {year}
        </div>
    </div>

   
    <div className={`flex-1 bg-white border-4 border-black p-6 rounded-3xl shadow-neo relative ${color}`}>
        <h3 className="text-2xl font-shrikhand">{title}</h3>
        <p className="font-bold text-lg mb-2">{place}</p>
        
        <div className="bg-white/50 p-3 rounded-xl border-2 border-black text-sm font-medium">
            {details}
        </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="py-10 px-4 max-w-4xl mx-auto">
        <div className="bg-custom-yellow px-8 py-3 rounded-full border-4 border-black w-fit mx-auto mb-10 shadow-neo transform rotate-1">
            <h2 className="text-3xl font-shrikhand">ACADEMIC TIMELINE 🎓</h2>
        </div>

        <div className="flex flex-col gap-8 relative">
            
            <div className="hidden md:block absolute left-[4rem] top-0 bottom-0 w-1 bg-black -z-10 border-l-2 border-dashed border-gray-400"></div>

            <EduCard 
                year="2023-2027"
                title="B.Tech CSE"
                place="Birla Institute of Technology, Mesra"
                color="bg-purple-100"
                details={
                    <ul className="list-disc list-inside">
                        <li>Relevant Coursework: DSA, OOP, DBMS, OS</li>
                        <li>Focus: Full Stack Development & AI</li>
                    </ul>
                }
            />
            <EduCard 
                year="XII (2023)"
                title="Secondary Education"
                place="Kendriya Vidyalaya No.2 AFS Jodhpur"
                color="bg-blue-100"
                details="CBSE Board | Percentage: 89.4%"
            />
             <EduCard 
                year="X (2021)"
                title="Secondary Education"
                place="Kendriya Vidyalaya No.2 AFS Jodhpur"
                color="bg-green-100"
                details="CBSE Board | Percentage: 89.4%"
            />
        </div>
    </section>
  );
};

export default Education;