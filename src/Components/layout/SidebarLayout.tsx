import { AiFillAppstore, AiOutlineGlobal } from "react-icons/ai";
import { FaHeart, FaFolder, FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { IoStatsChartSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
const SidebarLayout = () => {
  const [activeIndex, setActiveIndex] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") setActiveIndex("stats");
  }, []);

  const dashboardItems = [
    { name: "stats", icon: <IoStatsChartSharp size={"2rem"} />, route: "/" },
    {
      name: "users",
      icon: <FaUser size={"2rem"} />,
      route: "/users",
    },
    {
      name: "notifications",
      icon: <IoMdNotifications size={"2rem"} />,
      route: "/notifications",
    },
    { name: "favorites", icon: <FaHeart size={"2rem"} />, route: "/favorites" },
    {
      name: "global",
      icon: <AiOutlineGlobal size={"2rem"} />,
      route: "/global",
    },
    { name: "folder", icon: <FaFolder size={"2rem"} />, route: "/folder" },
  ];
  return (
    <section className="flex h-full  ">
      <div className="sidebar  bg-gradient-to-t from-[#151d41] to-[#28336a] h-full  flex flex-col gap-6  w-[8rem]">
        <div className="text-white flex justify-center pt-2  bg-gradient-to-tr from-[#4bd8a9] to-[#c7e4a0] h-[8rem] cursor-pointer group transition-all duration-500  items-center">
          <AiFillAppstore size={"3rem"} className="" />
        </div>

        <div className=" w-full">
          <ul className="flex flex-col justify-center items-start  text-white font-semibold gap-4 w-full">
            {dashboardItems.map((item) => (
              <li
                id={item.name}
                onClick={(e) => {
                  setActiveIndex(e.currentTarget.id);
                  navigate(`${item.route}`);
                }}
                className={`${
                  activeIndex === item.name ? "bg-[#131f47]" : ""
                } w-[90%]  ms-auto py-6  flex justify-center items-center  cursor-pointer relative`}
              >
                {item.icon}
                {item.name === "notifications" && (
                  <span className="w-2 h-2 rounded-full bg-[#fb3f77] animate-pulse self-start"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SidebarLayout;
