import Card from './Card';

function Cards() {
    const card = [
        { id: 1, title: "Frontend", cards: ["HTML", "CSS", "JavaScript", "React.js", "TailwindCss"] },
        { id: 2, title: "Backend", cards: ["Node.js", "Express", "MongoDB", "SQL"] },
    ];

    return (
        <div>
            {card.map((c) => (
                <div
                    key={c.id}
                    className="m-5 relative w-[85vw] h-[50vh] ml-[7vw] bg-white/12 shadow-lg backdrop-blur-lg flex items-center justify-center overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 border border-solid border-[#13131F]"
                >
                    <h2 className="absolute top-3 text-white font-bold text-2xl z-10">{c.title}</h2>
                    <Card cards={c.cards} /> 
                </div>
            ))}
        </div>
    );
}

export default Cards;
