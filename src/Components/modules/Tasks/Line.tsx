import React, { useState } from "react";

const MovingLine = () => {
  const [position, setPosition] = useState(0);

  // Function to update the position of the moving piece
  const movePiece = () => {
    setPosition((position) => (position + 40) % 1000); // 1000px line, 30px moving piece
    console.log(position);
  };

  // Start the movement when the component mounts
  React.useEffect(() => {
    const interval = setInterval(movePiece, 100); // Adjust the interval as needed
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative h-1  bg-[#dbb2d9] w-[1000px] rounded-full ">
        <div
          className={`absolute h-[4px] w-12  bg-white   shadow-md transition-all rounded-l-full
        duration-100 ${position > 900 ? "hidden" : ""}`}
          style={{ left: `${position}px` , top : `${position}` }}
        ></div>
      </div>

    </>
  );
};

export default MovingLine;
