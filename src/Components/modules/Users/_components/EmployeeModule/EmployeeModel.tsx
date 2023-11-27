import React, { SetStateAction, useEffect, useState } from "react";
import { TEmployeeData } from "../TableRowData";
import { userDataArray } from "../../Users";
import EmployeeProfile from "./_components/EmployeeProfile";
import EmployeeTasks from "./_components/EmployeeTasks";

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
  const [ActiveButton, setActiveButton] = useState("View Profile");
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
        className="w-[75%] h-[95%]  bg-white rounded-lg flex flex-col"
      >
        <div className="module-header  w-full  h-fit">
          <div className="p-8">
            <h2>Account Settings</h2>
          </div>
          <div className="w-[95%] mx-auto border-b-2  ">
            <button
              onClick={() => setActiveButton("View Profile")}
              className={` ${
                ActiveButton === "View Profile"
                  ? "text-blue-400  bg-gray-200"
                  : ""
              } hover:bg-gray-100 transition-all  px-6 py-3 border border-b-0 min-w-[8rem] `}
            >
              View Profile{" "}
            </button>
            <button
              onClick={() => setActiveButton("Tasks")}
              className={` ${
                ActiveButton === "Tasks" ? "text-blue-400 bg-gray-200" : ""
              } hover:bg-gray-100 transition-all  px-6 py-3 border border-b-0 min-w-[8rem]`}
            >
              Tasks
            </button>
          </div>
        </div>

        <div className=" w-full h-full flex p-8 gap-4">
          <div className="w-[30%] h-full flex flex-col justify-start items-center gap-4">
            <img
              className="rounded-full"
              src={employeeData.profilePic}
              alt=""
            />
            <button className="px-16 rounded-lg py-2 bg-gray-500">
              Change
            </button>
          </div>
          <div className="w-[70%]  h-full p-6 overflow-hidden">
            {ActiveButton === "View Profile" ? (
              <EmployeeProfile employeeData={employeeData} setEmployeeData={setEmployeeData} />
            ) : null}
            {ActiveButton === "Tasks" ? <EmployeeTasks /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModel;
