const Card= () => {
    const Cards = [
        {id:1,title:"React.js",img:""},
        {id:2,title:"HTML",img:""},
        {id:3,title:"CSS",img:""},
        {id:4,title:"JavaScript",img:""},
        {id:5,title:"Tailwind Css",img:""},
        
    ]
    return ( 
      <div className="h-[5vh] flex gap-3 w-[30vw] rounded-lg border border-white border-solid flex justify-center items-center z-10">
        <div className="h-[4vh] w-[8vw] bg-red-100"></div>
        <p className="text-white">React.js</p>
      </div>
    );
  };
  
  export default Card;
  