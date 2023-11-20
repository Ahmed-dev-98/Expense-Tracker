import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";

const Stats = () => {
  const stats = [
    { name: "Electric Usage", stat: 10.578, unit: "KWh", indicator: "567" },
    { name: "Internet Usage", stat: 14.897, unit: "Gb", indicator: "4.432" },
    { name: "Material Usage", stat: 56.908, unit: "$", indicator: "45.487" },
    { name: "Total Usage", stat: 995.904, unit: "$", indicator: "23.324" },
  ];
  return (
    <div className="w-[calc(100%-12rem)] right-[2rem] h-full  rounded-xl">
      <div className="w-[90%] mx-auto flex flex-col gap-12 ">
        <div className="flex gap-4 justify-start items-center">
          <h2 className="text-white">Factory Activity</h2>
          <div className="bg-gradient-to-r from-[#84bf47] to-[#39bc94] flex  justify-center items-center gap-3 rounded-full px-6 py-1">
            <p className="font-semibold text-white">Weekly</p> <VscTriangleDown />
          </div>
        </div>
        <div className="w-[80%] me-auto flex justify-between items-center gap-9 ">
          {stats.map((item) => (
            <div className="flex flex-col items-start justify-start ">
              <p className="text-[#47578a] text-xs">{item.name} </p>
              <p className="text-white text-3xl">
                {item.stat} <span className="text-sm">{item.unit}</span>{" "}
              </p>
              <div className="flex justify-center items-center gap-3">
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

                <p className="text-[#47578a] text-sm">{item.indicator}  <span className="text-xs">{item.unit}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
