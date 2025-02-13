import Cards from "./Cards";

function Skills() {
    return ( 
        <div id="skill" className="  h-[120vh]  w-full bg-[#13131F] relative">
           <div className=" min-h-fit flex flex-col absolute top-10 gap-5">
            <h1 className="text-4xl font-semibold text-white text-center ">Skills</h1>
            
            <div className="w-full max-w-screen-lg ">
            <Cards/>
            </div>
           </div>
        </div>
     );
}

export default Skills;