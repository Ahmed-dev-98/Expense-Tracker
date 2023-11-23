import rank1 from "../../../../assets/rank 1.png";
import rank2 from "../../../../assets/rank 2.png";
import rank3 from "../../../../assets/rank 3.png";
const CardsContainer = () => {
  const employees = [
    {
      name: "Ahmed Hassan Mohamed",
      id: "12",
      assignedTasks: 20,
      completedTasks: 20,
      image: rank1,
    },
    {
      name: "Ali Saleh Hassan ",
      id: "12",
      assignedTasks: 20,
      completedTasks: 19,
      image: rank2,
    },
    {
      name: "Sara Rida Mostafa",
      id: "12",
      assignedTasks: 20,
      completedTasks: 18,
      image: rank3,
    },
  ];

  return (
    <div className="from-[#2a356f] bg-gradient-to-b to-[#141b38] w-[95%] mx-auto mt-12   shadow-2xl rounded-xl ">
      <div className="p-8 machine flex flex-col gap-12 ">
        <div className="  flex gap-4 justify-start items-center">
          <h2 className="text-3xl text-[#b3cafc]">Employees Status</h2>
          <div className="rounded-full px-2 py-1 bg-gradient-to-r from-[#84bf47] to-[#39bc94] flex justify-center items-center">
            <p className="text-white font-semibold text-sm px-3">
              Employees Of the Month
            </p>
          </div>
        </div>

        <div className="machine cards  flex justify-between items-center relative">
          {employees.map((emp) => (
            <div className="w-[30%] relative h-[18rem] bg-gradient-to-r from-[#394783] to-[#2d3573] shadow-xl rounded-lg  ">
              <div className="Rank w-28 h-8   absolute top-3 -left-8 -rotate-45 flex justify-center items-center ">
                <img src={emp.image} alt="" className="w-12 " />
              </div>
              <div className="employee details flex flex-col gap-4 items-start mt-16 mx-2 text-white justify-center">
                <h3>
                  Name : <span>{emp.name}</span>{" "}
                </h3>
                <h3>
                  ID : <span>{emp.id}</span>
                </h3>
                <h3>
                  Assigned Tasks : <span>{emp.assignedTasks}</span>
                </h3>
                <h3>
                  Completed Tasks : <span>{emp.completedTasks}</span>
                </h3>
                <h3>
                  Completion Rate :{" "}
                  <span className={`${(emp.completedTasks / emp.assignedTasks)*100 > 80 ? "bg-green-400 " : (emp.completedTasks / emp.assignedTasks)*100 > 50 && (emp.completedTasks / emp.assignedTasks)*100 < 80  ? "bg-yellow-400 " : "bg-red-400 " }px-4 rounded-tl-lg rounded-br-lg`}>{(emp.completedTasks / emp.assignedTasks) * 100}%</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-[#374274] w-[90%] mx-auto"></div>

      <div className="machine cards  flex justify-between items-center p-8 ">
        <div className="w-[30%]  h-[27rem] bg-gradient-to-r from-[#394783] to-[#2d3573] shadow-xl rounded-lg overflow-hidden"></div>
        <div className="w-[30%] overflow-hidden h-[27rem] bg-gradient-to-r from-[#394783] to-[#2d3573] shadow-xl rounded-lg"></div>
        <div className="w-[30%] overflow-hidden h-[27rem] bg-gradient-to-r from-[#394783] to-[#2d3573] shadow-xl rounded-lg"></div>
      </div>
    </div>
  );
};

export default CardsContainer;
