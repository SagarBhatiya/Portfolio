import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import Link from "./Link";

function Nav() {
  const [showDetails, setshowDetails] = useState(true);
  const toggleDetails = () => {
    setshowDetails(!showDetails);
  };
  return (
    <>
      <div className="   z-999 fixed w-[100%] h-[8vh] md:h-[20vh] md:w-full bg-[#13131F] md:flex md:gap-6  md: justify-center md:items-center bg-[#13131F] ">
        <div className="h-[10%] w-screen md:w-[35%] flex items-center justify-between p-5 md:flex md:items-center md:justify-center ">
          <p className="  text-white text-xl font-bold p-4 ">
            Sagar <span className="text-[#854CE6] text-center">Bhatiya</span>
          </p>
          <TfiAlignJustify
            className="text-xl text-white md:invisible"
            onClick={toggleDetails}
          />
        </div>
        <div
          className={`w-full  h-[40vh] pl-6 shadow-lg text-white font-bold bg-white/30 backdrop-blur-none  flex flex-col gap-2 ${
            showDetails ? "invisible" : "visible"
          } md:shadow-none md:visible md:flex md:flex-row md:h-[10vh] md:bg-[#13131F] md:backdrop-filter-none md:w-[63%] gap-12  md:mr-30 md:bg-transparent  md:items-center md:justify-around`}
        >
          <Link />
        </div>
      </div>
    </>
  );
}

export default Nav;
