
type TEmployeeData = {
    name : string
    id : string
    department: string
    position: string
    tasks: number
    completedTasks: number
    status : string
    deliverData: string
}
const UserRowData = ({ employeeData }:{employeeData:TEmployeeData}) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex">
          <div className="flex-shrink-0 w-10 h-10 relative ">
            <div className="absolute -top-2 right-0 w-3 h-3 rounded-full bg-green-500 animate-pulse  ">
              <span className=" rounded-full  animate-pulse "></span>
            </div>
            <img
              className="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">{employeeData.name}</p>
            <p className="text-gray-600 whitespace-no-wrap">{employeeData.id}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{employeeData.department}</p>
        <p className="text-gray-600 whitespace-no-wrap">{employeeData.position}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap ms-12">{employeeData.tasks}</p>
        <p className="text-gray-600 whitespace-no-wrap">{employeeData.deliverData}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-green-200  rounded-full"
          ></span>
          <span className="relative">{(employeeData.completedTasks / employeeData.tasks)*100}%</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            className="absolute inset-0 bg-yellow-400  rounded-full"
          ></span>
          <span className="relative">{employeeData.status}</span>
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start">
        <button
          type="button"
          className="inline-block text-gray-500 hover:text-gray-700"
        >
          View
        </button>
      </td>
    </tr>
  );
};

export default UserRowData;
