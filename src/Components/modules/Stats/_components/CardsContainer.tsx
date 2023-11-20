const CardsContainer = () => {
  return (
    <div className="from-[#2a356f] bg-gradient-to-b to-[#141b38] w-[95%] mx-auto mt-12   shadow-2xl rounded-xl ">
      <div className="p-8 machine flex flex-col gap-12 ">
        <div className="  flex gap-4 justify-start items-center">
          <h2 className="text-3xl text-[#b3cafc]">Machine Status</h2>
          <div className="rounded-full px-2 py-1 bg-gradient-to-r from-[#84bf47] to-[#39bc94] flex justify-center items-center">
            <p className="text-white font-semibold text-sm px-3">
              see All Machines
            </p>
          </div>
        </div>

        <div className="machine cards  flex justify-between items-center">
          <div className="w-[30%]  h-[15rem] bg-gradient-to-r from-[#394783] to-[#2d3573] shadow-xl rounded-lg overflow-hidden"></div>
          <div className="w-[30%] overflow-hidden h-[15rem] bg-gradient-to-r from-[#394783] to-[#2d3573] shadow-xl rounded-lg"></div>
          <div className="w-[30%] overflow-hidden h-[15rem] bg-gradient-to-r from-[#394783] to-[#2d3573] shadow-xl rounded-lg"></div>
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
