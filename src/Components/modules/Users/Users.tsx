// import axios from "axios";

import { useEffect, useState } from "react";
import SearchDropdown from "./_components/SearchDropdown";
import TableHead from "./_components/TableHead";
import TableRowData, { TEmployeeData } from "./_components/TableRowData";
import EmployeeModel from "./_components/EmployeeModule/EmployeeModel";

// eslint-disable-next-line react-refresh/only-export-components
export const userDataArray: TEmployeeData[] = [
  {
    name: "Ahmed Hassan",
    id: "123",
    department: "IT",
    position: "Front-End",
    tasks: 13,
    completedTasks: 10,
    isLoggedIn: true,
    status: "pending",
    deliverData: "12-5-2023",
    profilePic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
  },
  {
    name: "Islam Mamdouh",
    id: "12",
    department: "Design",
    position: "UI/UX",
    tasks: 4,
    completedTasks: 2,
    isLoggedIn: false,
    status: "pending",
    deliverData: "11-5-2023",
    profilePic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
  },
  {
    name: "Reda Tarek",
    id: "11",
    department: "HR",
    position: "Product Owner",
    tasks: 13,
    completedTasks: 13,
    isLoggedIn: false,
    status: "Completed",
    deliverData: "12-2-2023",
    profilePic:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
  },
  {
    name: "Sara Ali",
    id: "1234",
    department: "IT",
    position: "SEO Specialist",
    tasks: 4,
    completedTasks: 2,
    isLoggedIn: true,
    status: "pending",
    deliverData: "12-9-2023",
    profilePic:
      "https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
  },
  {
    name: "Nourhan Hassan",
    id: "21",
    department: "IT",
    position: "Back-End",
    tasks: 13,
    completedTasks: 2,
    isLoggedIn: true,
    status: "Overdue",
    deliverData: "12-2-2023",
    profilePic:
      "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80",
  },
];
const Users = () => {
  const [data, setData] = useState<TEmployeeData[]>([]);
  const [viewEmployeeModel, setViewEmployeeModel] = useState("");

  useEffect(() => {
    setData(userDataArray);
  }, [viewEmployeeModel]);

  return (
    <section className="flex flex-col gap-5 justify-center w-full items-center relative  ">
      <div className="h-[5rem]  w-full flex items-start justify-start gap-5">
        <SearchDropdown setData={setData} />
      </div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8 w-[98%] mx-auto no-scrollbar h-[20rem]">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden bg-red-400 h-[27rem] no-scrollbar overflow-y-scroll">
              <table className="min-w-full leading-normal ">
                <TableHead />
                <tbody className="py-8 w-[90%] mx-auto overflow-y-scroll no-scrollbar h-[22rem] bg-red-400">
                  {data.map((user) => (
                    <TableRowData
                      employeeData={user}
                      setViewEmployeeModel={setViewEmployeeModel}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {viewEmployeeModel ? (
        <EmployeeModel
          setViewEmployeeModel={setViewEmployeeModel}
          viewEmployeeModel={viewEmployeeModel}
        />
      ) : (
        ""
      )}
    </section>
  );
};

export default Users;
