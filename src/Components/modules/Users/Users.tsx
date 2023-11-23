// import axios from "axios";
// import { useEffect } from "react";
const Users = () => {
  // const userDataArray = [
  //   {
  //     id: 1,
  //     month: "junuary",
  //     year: 2023,
  //     income: 7000,
  //     expense: 2000,
  //   },
  //   {
  //     id: 2,
  //     month: "february",
  //     year: 2023,
  //     income: 12000,
  //     expense: 6000,
  //   },
  //   {
  //     id: 3,
  //     month: "march",
  //     year: 2023,
  //     income: 4000,
  //     expense: 3200,
  //   },
  //   {
  //     id: 4,
  //     month: "april",
  //     year: 2023,
  //     income: 2500,
  //     expense: 600,
  //   },
  //   {
  //     id: 5,
  //     month: "may",
  //     year: 2023,
  //     income: 3000,
  //     expense: 2000,
  //   },
  // ];

  // const getAllUsers = async () => {
  //   await axios
  //     .get("https://todo-task-iti.onrender.com/api/v1/user")
  //     .then(({ data }) => {
  //       console.log(data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <section className="flex flex-col gap-5 justify-center w-full items-center ">
      <div className="h-[5rem] "></div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8 w-[98%] mx-auto no-scrollbar h-[20rem]">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden bg-red-400 h-[27rem] no-scrollbar overflow-y-scroll">
              <table className="min-w-full leading-normal ">
                <thead className="">
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Employees
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Department
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Assigned Tasks
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Progress
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      status
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody className="py-8 w-[90%] mx-auto overflow-y-scroll no-scrollbar h-[22rem] bg-red-400">
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
                          <p className="text-gray-900 whitespace-no-wrap">
                            Molly Sanders
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            000004
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">Design</p>
                      <p className="text-gray-600 whitespace-no-wrap">UI/UX</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap ms-12">
                        12
                      </p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        Deliver in 3 days
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200  rounded-full"
                        ></span>
                        <span className="relative">80%</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-yellow-400  rounded-full"
                        ></span>
                        <span className="relative">Pending</span>
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
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10 relative">
                          <div className="absolute -top-2 right-0 w-3 h-3 rounded-full bg-[#fb3f77] animate-pulse  ">
                            <span className=" rounded-full  animate-pulse "></span>
                          </div>
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Michael Roberts
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            000003
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">IT</p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        Front-End
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap ms-12">
                        5
                      </p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        Deliver in 6 days
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-yellow-600 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-yellow-300  rounded-full"
                        ></span>
                        <span className="relative">55%</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-yellow-400  rounded-full"
                        ></span>
                        <span className="relative">Pending</span>
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
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10 relative">
                          <div className="absolute -top-2 right-0 w-3 h-3 rounded-full bg-green-500 animate-pulse  ">
                            <span className=" rounded-full  animate-pulse "></span>
                          </div>
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Devin Childs
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            000002
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        Marketing
                      </p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        SEO Specialist
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap ms-12">
                        3
                      </p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        Deliver in 2 weeks
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-orange-200  rounded-full"
                        ></span>
                        <span className="relative">30%</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-yellow-400  rounded-full"
                        ></span>
                        <span className="relative">Pending</span>
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
                  <tr className="">
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10 relative">
                          <div className="absolute -top-2 right-0 w-3 h-3 rounded-full bg-green-500 animate-pulse  ">
                            <span className=" rounded-full  animate-pulse "></span>
                          </div>
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Frederick Nicholas
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            000001
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">HR</p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        Product Owner
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap ms-12">
                        4
                      </p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        Deliver 3 weeks ago
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200  rounded-full"
                        ></span>
                        <span className="relative">70%</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-red-400  rounded-full"
                        ></span>
                        <span className="relative">Overdue</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start ">
                      <button
                        type="button"
                        className="inline-block text-gray-500 hover:text-gray-700"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="flex-shrink-0 w-10 h-10 relative">
                          <div className="absolute -top-2 right-0 w-3 h-3 rounded-full bg-green-500 animate-pulse  ">
                            <span className=" rounded-full  animate-pulse "></span>
                          </div>
                          <img
                            className="w-full h-full rounded-full"
                            src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Frederick Nicholas
                          </p>
                          <p className="text-gray-600 whitespace-no-wrap">
                            000001
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">HR</p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        Product Owner
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap ms-12">
                        4
                      </p>
                      <p className="text-gray-600 whitespace-no-wrap">
                        Deliver 3 weeks ago
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200  rounded-full"
                        ></span>
                        <span className="relative">70%</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-red-400  rounded-full"
                        ></span>
                        <span className="relative">Overdue</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-start ">
                      <button
                        type="button"
                        className="inline-block text-gray-500 hover:text-gray-700  "
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Users;
