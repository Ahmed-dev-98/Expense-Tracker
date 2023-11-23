import { useState } from "react";
import profilePic from "../../assets/profile-pic.svg";
import { FaCaretDown, FaUserTie } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import { BiMessageRoundedError, BiLogOut } from "react-icons/bi";
const Navbar = () => {
  const [isOpneMenue, setIsOpenMenue] = useState(false);
  return (
    <div className=" w-full  h-[3 rem] mb-4 z-[10]  flex justify-end items-center border-b shadow-xl border-gray-800   ">
      <div className="flex justify-center items-center gap-3 me-12 relative ">
        <img src={profilePic} alt="" className="w-12 h-12 rounded-full" />
        <h2 className="text-white text-1xl font-semibold mb-1">Ahmed Hassan</h2>
        <div
          onClick={() => setIsOpenMenue(!isOpneMenue)}
          className="w-4 h-4 cursor-pointer flex justify-center items-center bg-gradient-to-tr from-[#4bd8a9] to-[#c7e4a0] rounded-full"
        >
          <FaCaretDown className="" />
          <div
            className={`bg-[#49479f] w-full ${
              isOpneMenue ? "h-[10rem]" : "h-0 overflow-hidden"
            } transition-all duration-700  absolute right-0 left-3 top-14 rounded-b-xl  `}
          >
            <div className="ms-2 flex flex-col justify-start items-start  gap-2 mt-2">
              <div
                className={`flex justify-center items-center gap-4 ${isOpneMenue ? "opacity-100 delay-300" : "opacity-0"}  transition-all duration-700`}
              >
                <FaUserTie size={"1.5rem"} className="text-white" />
                <h2 className=" text-xl text-gray-900 hover:text-blue-700 transition-all duration-700 font-semibold">My profile</h2>
              </div>
              <div className={`flex justify-center items-center gap-4 ${isOpneMenue ? "opacity-100 delay-300" : "opacity-0"}  transition-all duration-700 `}>
                <SlEnvolope className="text-white" size={"1.5rem"} />
                <h2 className=" text-xl text-gray-900 hover:text-blue-700 transition-all duration-700 font-semibold">Inbox</h2>
              </div>
              <div className={`flex justify-center items-center gap-4 ${isOpneMenue ? "opacity-100 delay-300" : "opacity-0"}  transition-all duration-700`}>
                <BiMessageRoundedError size={"1.5rem"} className="text-white" />
                <h2 className=" text-xl text-gray-900 hover:text-blue-700 transition-all duration-700 font-semibold">Help</h2>
              </div>
              <div className={`flex justify-center items-center gap-4 ${isOpneMenue ? "opacity-100 delay-300" : "opacity-0"}  transition-all duration-700`}>
                <BiLogOut size={"1.5rem"} className="text-white" />
                <h2 className=" text-xl text-gray-900 hover:text-blue-700 transition-all duration-700 font-semibold">Logout</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
