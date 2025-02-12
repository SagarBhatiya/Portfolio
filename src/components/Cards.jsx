import Card from './Card';

const Cards = () => {
  return (
    <div className="relative w-[90vw] h-[50vh] ml-[5vw] bg-white/12 shadow-lg backdrop-blur-lg flex items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 ease-in-out group hover:scale-105">
      <h2 className="absolute top-3 text-white font-bold text-2xl z-10">Frontend</h2>
      <Card />

    </div>
  );
};

export default Card;