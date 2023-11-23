import { VscTriangleDown } from "react-icons/vsc";

const Stats = () => {
  const stats = [
    { name: "All Employees", stat: 100 },
    { name: "Available for Tasks", stat: 14 },
    { name: "Overdue", stat: 20 },
    { name: "Available Tasks", stat: 12 },
  ];
  return (
    <div className="w-[calc(100%-12rem)] right-[2rem] h-full  rounded-xl ">
      <div className="w-[90%] mx-auto flex flex-col gap-12 ">
        <div className="flex gap-4 justify-start items-center">
          <h2 className="text-white">Company Activity</h2>
          <div className="bg-gradient-to-r from-[#84bf47] to-[#39bc94] flex  justify-center items-center gap-3 rounded-full px-6 py-1">
            <p className="font-semibold text-white">Weekly</p>{" "}
            <VscTriangleDown />
          </div>
        </div>
        <div className="w-full mx-auto flex justify-between items-center gap-12  ">
          <div className="flex justify-start gap-20 items-center  w-full">
            {stats.map((item) => (
              <div className="flex flex-col items-start justify-start ">
                <p className="text-[#47578a] text-xs">{item.name} </p>
                <p
                  className={`${
                    item.name !== "Overdue" ? "text-white" : "text-red-500"
                  } text-3xl`}
                >
                  {item.stat}
                </p>
                {/* <div className="flex justify-center items-center gap-3">
                {item.name === "Electric Usage" ||
                item.name === "Material Usage" ? (
                  <VscTriangleUp className={`text-red-600`} />
                ) : (
                  <VscTriangleDown
                    className={`
                      text-green-500
                    `}
                  />
                )}

                <p className="text-[#47578a] text-sm">
                  {item.name === 'Available for Tasks' }
                  {item.indicator} <span className="text-xs">{item.unit}</span>
                </p>
              </div> */}
              </div>
            ))}
          </div>
          <div className="flex  gap-10 text-white  ">
            <button className="whitespace-nowrap px-8 py-2 bg-blue-600 rounded-full">Add Task</button>
            <button className="whitespace-nowrap px-8 py-2 bg-blue-600 rounded-full">Assign Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
