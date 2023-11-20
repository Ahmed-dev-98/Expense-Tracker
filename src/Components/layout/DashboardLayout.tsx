import Modules from "./Modules";
import Navbar from "./Navbar";
import SidebarLayout from "./SidebarLayout";

const DashboardLayout = () => {
  return (
    <div className="w-full bg-[#131f47] h-fit flex justify-start items-start relative">
      <SidebarLayout />
      <div className="w-full flex flex-col">
        <Navbar />
        <Modules />
      </div>
    </div>
  );
};

export default DashboardLayout;
