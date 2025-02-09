import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { Link } from "react-router-dom";


function Nav() {
    const [showDetails,setshowDetails] = useState(true);
    const toggleDetails = ()=>{
        setshowDetails(!showDetails);
    }
        return ( 
       <>
        <div className="fixed md:w-full bg-[#13131F] md:flex md:gap-6  md: justify-center md:items-center md:bg-[#13131F] ">
        <div className="h-[10%] w-screen md:w-[35%] flex items-center justify-between p-5 md:flex md:items-center md:justify-center ">
            <p className="  text-white text-xl font-bold p-4 ">Sagar <span className="text-[#854CE6] text-center">Bhatiya</span></p>
            <TfiAlignJustify className="text-xl text-white md:invisible" onClick={toggleDetails} />
            
        </div>
        <div className={`w-full  h-[25%] text-white font-bold bg-white/4 flex flex-col gap-4 p-3 ${showDetails?'invisible':'visible'}  md:visible md:flex md:flex-row  md:w-[63%] gap-12  md:mr-30 md:bg-transparent  md:items-center md:justify-around`}>
     
    <a href="/"   className="md:hover:text-[#854CE6]" to="/">Home</a>
     <a href="#about"  className="md:hover:text-[#854CE6]" to="/about">About</a>
        <a href="#skill"   className="md:hover:text-[#854CE6]" to="/skills">Skills</a>
        <a href="#project" className="md:pr-10 md:hover:text-[#854CE6]" to="/projects">Projects</a>
      
         <Link to="https://github.com/SagarBhatiya" className="h-[15%] w-[29%] rounded-full flex items-center justify-center bg-[#854CE6] md:h-[48%] md:w-[20%]   md:border-solid md:border-2 md:border-[#854CE6] md:bg-transparent md:text-[#854CE6] md:hover:bg-[#854CE6] md:hover:text-white">Github Profile</Link>
        </div>
        </div>
        </>
     );
}

export default Nav;