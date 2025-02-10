import { ReactTyped } from "react-typed";

function About() {
  return (
    <div id="about" className="h-screen  w-full  bg-[#13131F]">
      <div className="flex  justify-center relative">
        <div className="transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:shadow-xl hover:opacity-90 absolute top-20 md:top-50 md:left-180 h-[34vh] md:h-[63vh] border-2 border-solid border-[#854DE5] w-[68vw] md:w-[30vw] rounded-full object-contain overflow-hidden ">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className=" md:h-[30vh]  md:w-[35vw] h-[20vh] w-[75vw]  flex flex-col md:items-start justify-start gap-5 absolute top-115 md:top-60 left-50 md:left-60 md:ml-15 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <p className="md:text-5xl text-3xl   font-extrabold">Hi,I am</p>
        <p className="md:text-5xl text-3xl font-extrabold">Sagar Bhatiya</p>
        <p className="md:text-3xl text-2xl  font-extrabold">
          I am a {" "}
          <ReactTyped
            className="text-[#854CE6]"
            strings={["Student", "Programmer", "Frontend Developer"]}
            typeSpeed={100}
            backSpeed={80}
            loop
          />
        </p>
      </div>

      <div className="left-10 h-[25vh] w-[40vh] absolute top-135 md:h-[25vh]  md:w-[35vw]  w-[75vw] md:left-19 md:top-85">
        <h1 className="text-lg font-bold text-[#919299] text-center">
          I’m a motivated and flexible person who loves taking on new
          challenges. I enjoy learning new things and always aim to do my best
          work. With a positive attitude and a focus on growth, I’m ready to
          contribute and achieve great results.
        </h1>
      </div>
      <div className="h-[7%]  w-[40%]  text-semibold text-white top-190 left-28  absolute bg-[#854CE6] border-solid border-2 border-[#854CE6]   rounded-full flex items-center justify-center  md:top-130 md:left-50 md:h-[10vh] md:w-[15vw]    bg-gradient-to-r from-[#C600] to-[#9100FF]  transition-all duration-300 hover:scale-105  bg-gradient-to-r from-[#C600FF] to-[#9100FF]  transition-all duration-300 hover:scale-105 text-white">
        <a href="https://drive.google.com/file/d/1KsC8-nUolQYk2aeCGUfXBsEUZCToNwom/view">
          Resume
        </a>
      </div>
    </div>
  );
}

export default About;
