
export type TEmployeeData = {
  name: string;
  id: string;
  department: string;
  position: string;
  tasks: number;
  completedTasks: number;
  status: string;
  deliverData: string;
  profilePic: string;
  isLoggedIn: boolean;
};
const TableRowData = ({
  employeeData,
}: {
  employeeData: TEmployeeData;
}) => {



  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex">
          <div className="flex-shrink-0 w-10 h-10 relative ">
            <div
              className={`absolute -top-2 right-0 w-3 h-3 rounded-full ${
                employeeData.isLoggedIn ? "bg-green-500" : "bg-red-500"
              } animate-pulse `}
            >
              <span className=" rounded-full  animate-pulse "></span>
            </div>
            <img
              className="w-full h-full rounded-full"
              src={employeeData.profilePic}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {employeeData.name}
            </p>
            <p className="text-gray-600 whitespace-no-wrap">
              {employeeData.id}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {employeeData.department}
        </p>
        <p className="text-gray-600 whitespace-no-wrap">
          {employeeData.position}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap ms-12">
          {employeeData.tasks}
        </p>
        <p className="text-gray-600 whitespace-no-wrap">
          {employeeData.deliverData}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
          <span
            aria-hidden
            className={`absolute inset-0 ${
              (employeeData.completedTasks / employeeData.tasks) * 100 < 49
                ? "bg-red-600"
                : (employeeData.completedTasks / employeeData.tasks) * 100 >
                    49 &&
                  (employeeData.completedTasks / employeeData.tasks) * 100 < 85
                ? "bg-yellow-400"
                : "bg-green-600"
            }   rounded-full`}
          ></span>
          <span className="relative">
            {((employeeData.completedTasks / employeeData.tasks) * 100).toFixed(
              1
            )}
            %
          </span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-black leading-tight">
          <span
            aria-hidden
            className={`absolute inset-0 ${
              employeeData.status === "Pending"
                ? "bg-yellow-400"
                : employeeData.status === "Completed"
                ? "bg-green-600"
                : employeeData.status === "Overdue"
                ? "bg-red-600"
                : "bg-yellow-400"
            }   rounded-full`}
          ></span>
          <span className="relative text-black">{employeeData.status}</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
        <button
          type="button"
          className="inline-block text-black hover:text-gray-700"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default TableRowData;
