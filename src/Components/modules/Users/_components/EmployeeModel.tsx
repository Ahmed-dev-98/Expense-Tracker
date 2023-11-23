import React, { SetStateAction, useEffect, useState } from "react";
import { TEmployeeData } from "./TableRowData";
import { userDataArray } from "../Users";

const EmployeeModel = ({
  setViewEmployeeModel,
  viewEmployeeModel,
}: {
  setViewEmployeeModel: React.Dispatch<SetStateAction<string>>;
  viewEmployeeModel: string;
}) => {
  const [employeeData, setEmployeeData] = useState<TEmployeeData>(
    {} as TEmployeeData
  );
const [activeList , setActiveList]=useState('')
  useEffect(() => {
    if (viewEmployeeModel) {
      const empData = userDataArray.filter(
        (user) => user.id === viewEmployeeModel
      );
      setEmployeeData(empData[0]);
    }
  }, []);

  return (
    <div
      onClick={() => setViewEmployeeModel("")}
      className="overlay absolute bg-gray-800/60 top-0 bottom-0 left-0 right-0 h-[calc(100vh-5rem)] z-[20] flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[75%] h-[95%] bg-white rounded-lg flex"
      >
        <div className="w-[40%] bg-red-300 h-full p-6">
          <div className="mb-3">
            <img
              className="rounded-full"
              src={employeeData.profilePic}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-3">
              <p className="text-xl">Name : {employeeData.name}</p>
              <p>Position : {employeeData.position}</p>
            </div>
            <div className="border w-[70%] mx-auto border-gray-800"></div>
            <div className="">
              <ul className="flex flex-col gap-5">
                <li onClick={()=>setActiveList('profile')} className={`${activeList === "profile" ? "text-gray-950 ms-4" : "text-gray-700" } cursor-pointer hover:ms-4 transition-all duration-500 hover:text-gray-950 `}>Profile</li>
                <li onClick={()=>setActiveList('tasks')} className={`${activeList === "tasks" ? "text-gray-950 ms-4" : "text-gray-700" } cursor-pointer hover:ms-4 transition-all duration-500 hover:text-gray-950 text-gray-700`}>Tasks</li>
                <li onClick={()=>setActiveList('edit')} className={`${activeList === "edit" ? "text-gray-950 ms-4" : "text-gray-700" } cursor-pointer hover:ms-4 transition-all duration-500 hover:text-gray-950 text-gray-700`}>Edit</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[60%] bg-red-400 h-full"></div>
      </div>
    </div>
  );
};

export default EmployeeModel;
