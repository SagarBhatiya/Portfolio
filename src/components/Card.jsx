import HTML from '../assets/HTML5_logo_and_wordmark.svg';
import CSS from '../assets/Official_CSS_Logo.svg';
import JavaScript from '../assets/Unofficial_JavaScript_logo_2.svg';
import Reactjs from '../assets/react.svg';
import TailwindCss from '../assets/220px-Tailwind_CSS_logo.svg.webp';
import Nodejs from '../assets/220px-Node.js_logo.svg.webp';
import Express from '../assets/220px-Expressjs.webp';
import MYSQL from '../assets/220px-MySQL_textlogo.svg.webp';
import MongoDB from '../assets/220px-MongoDB_Logo.svg.webp';

const Card = ({ cards }) => {
  const techImages = [
    { id: 1, name: "HTML", src: HTML },
    { id: 2, name: "CSS", src: CSS },
    { id: 3, name: "JavaScript", src: JavaScript },
    { id: 4, name: "Reactjs", src: Reactjs },
    { id: 5, name: "TailwindCss", src: TailwindCss },
    { id: 6, name: "Nodejs", src: Nodejs },
    { id: 7, name: "Express", src: Express },
    { id: 8, name: "MYSQL", src: MYSQL },
    { id: 9, name: "MongoDB", src: MongoDB },
    
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {cards.map((card, index) => (
        <div
          key={index} 
          className="h-[15vh] w-[23vw] flex flex-col justify-center items-center rounded-lg border border-white border-solid p-6 shadow-lg "
        >
          {techImages
            .filter((tech) => tech.name === card) 
            .map((tech) => (
              <div key={tech.id} className="h-[5vh]   w-[10vw] flex justify-center items-center rounded-lg mb-4">
                <img  src={tech.src} alt={tech.name} className="h-[25vh] w-[25vw] object-contain" />
              </div>
            ))}
          <p className="text-white text-lg font-medium">{card}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
