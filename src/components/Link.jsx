function Link() {
    return ( 
        <>
         <a href="/"   className="md:hover:text-[#854CE6]" to="/">Home</a>
     <a href="#about"  className="md:hover:text-[#854CE6]" to="/about">About</a>
        <a href="#skill"   className="md:hover:text-[#854CE6]" to="/skills">Skills</a>
        <a href="#project" className="md:pr-10 md:hover:text-[#854CE6]" to="/projects">Projects</a>
      
         <a href="https://github.com/SagarBhatiya" className="h-[15%]  w-[29%] bg-[#854CE6] border-solid border-2 border-[#854CE6]   rounded-full flex items-center justify-center md:bg-[#854CE6] md:h-[8vh] md:w-[10vw]   md:border-solid md:border-2 md:border-[#854CE6] md:bg-transparent md:text-[#854CE6] md:hover:bg-[#854CE6] md:hover:text-white">Github Profile</a>
        </>
     );
}

export default Link;