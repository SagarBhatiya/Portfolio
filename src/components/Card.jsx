const Card = ({ cards }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {cards.map((card, index) => (
        <div
          key={index} 
          className="h-[15vh] w-[23vw] flex flex-col justify-center items-center rounded-lg border border-white border-solid p-6 shadow-lg bg-gray-800"
        >
          <div className="h-[5vh] w-[10vw] bg-red-100 flex justify-center items-center rounded-lg mb-4">
            <p className="text-white text-3xl font-bold">{card[0]}</p> 
          </div>
          <p className="text-white text-lg font-medium">{card}</p> 
        </div>
      ))}
    </div>
  );
};

export default Card;
