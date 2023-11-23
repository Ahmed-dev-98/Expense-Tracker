import React, { SetStateAction, useState } from "react";
import { TEmployeeData } from "./TableRowData";
import { userDataArray } from "./Users";

const SearchDropdown = ({
  setData,
}: {
  setData: React.Dispatch<SetStateAction<TEmployeeData[]>>;
}) => {
  const [dorpDownText, setDropDownText] = useState("Search By");
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  const searchBy = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (dorpDownText === "Name") {
      const filterdData = userDataArray.filter((emp) =>
        emp.name
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      setData(filterdData);
    } else if (dorpDownText === "ID") {
      const filterdData = userDataArray.filter((emp) =>
        emp.id.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setData(filterdData);
    } else {
      const filterdData = userDataArray.filter((emp) =>
        emp.department
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      setData(filterdData);
    }
  };
  return (
    <div className=" ms-12 flex  justify-center items-center gap-4 ">
      <div className="dropdown group inline-block relative">
        <button
          onClick={() => {
            setIsOpenDropDown(!isOpenDropDown);
          }}
          className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center whitespace-nowrap"
        >
          <span className="mr-1">{dorpDownText}</span>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul
          className={`dropdown-menu ${
            isOpenDropDown ? "block" : "hidden"
          } absolute  text-gray-700 pt-1`}
        >
          <li
            onClick={() => {
              setDropDownText("Name");
              setIsOpenDropDown(false);
            }}
            className=""
          >
            <p className="rounded-t cursor-pointer bg-gray-200 hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap">
              Name
            </p>
          </li>
          <li
            onClick={() => {
              setDropDownText("ID");
              setIsOpenDropDown(false);
            }}
            className=""
          >
            <p className="bg-gray-200 hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap cursor-pointer">
              ID
            </p>
          </li>
          <li
            onClick={() => {
              setDropDownText("Department");
              setIsOpenDropDown(false);
            }}
            className=""
          >
            <p className="rounded-b bg-gray-200 hover:bg-gray-400 py-1 px-4 block whitespace-no-wrap cursor-pointer">
              Department
            </p>
          </li>
        </ul>
      </div>
      <input
        onChange={(e) => searchBy(e)}
        type="text"
        className="w-full py-2 rounded-sm outline-none px-2"
      />
    </div>
  );
};

export default SearchDropdown;
