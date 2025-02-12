import Cards from "./Cards";

function Skills() {
    return ( 
        <div id="skill" className="h-screen w-full bg-[#13131F] relative">
           <div className=" flex flex-col absolute top-10 gap-10">
            <h1 className="text-4xl font-semibold text-white text-center ">Skills</h1>
            <Cards/>
           </div>
        </div>
     );
}

export default Skills;