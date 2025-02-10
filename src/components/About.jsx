import {ReactTyped}from 'react-typed';

function About() {
 
  return (
    <div id="about" className="h-screen  w-full  bg-red-100">
      <div className="flex  justify-center relative">
        <div className="absolute top-20 md:top-72 md:left-220 h-[34vh] md:h-[52vh] border-2 border-solid border-[#854DE5] w-[68vw] md:w-[25vw] rounded-full object-contain overflow-hidden ">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className=" bg-red-400 text-right md:h-[25vh]  md:w-[30vw] h-[20vh] w-[75vw]  flex flex-col items-center justify-center gap-2 absolute top-115 md:top-80 md:left-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl   font-extrabold">Hi,I am</h1>
        <h1 className="text-4xl font-extrabold">Sagar Bhatiya</h1>
        <h1 className="text-2xl font-extrabold">
          I am a {" "}
          <ReactTyped className='text-[#854CE6]'
          strings={["Student","Programmer","Frontend Developer"]}
          typeSpeed={100}
          backSpeed={80}
          loop  
          />
        </h1>
      </div>
    </div>
  );
}

export default About;
