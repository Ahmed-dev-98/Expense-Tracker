import React, { FormEvent, SetStateAction, useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { TEmployeeData } from "../../TableRowData";

interface Iprops {
  employeeData: TEmployeeData;
  setEmployeeData: React.Dispatch<SetStateAction<TEmployeeData>>;
}

const EmployeeProfile = (props: Iprops) => {
  const [inputActive, setInputActive] = useState(false);
  const [inputData, setInputData] = useState<TEmployeeData>(
    {} as TEmployeeData
  );

  const formInputs = [
    {
      labelText: "Name",
      inputDefaultValue: props.employeeData.name,
    },
    {
      labelText: "Position",
      inputDefaultValue: props.employeeData.position,
    },
    {
      labelText: "Department",
      inputDefaultValue: props.employeeData.department,
    },
    {
      labelText: "ID",
      inputDefaultValue: props.employeeData.id,
    },
    {
      labelText: "Status",
      inputDefaultValue: props.employeeData.status,
    },
  ];
  useEffect(() => {
    setInputData(props.employeeData);
  }, []);

  const getInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newObj = {
      ...props.employeeData,
      [e.target.name]: e.target.value,
    };

    setInputData(newObj);
  };
  const onSave = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setEmployeeData((prev) => (prev = { ...prev, ...inputData }));
    setInputActive(false);
    console.log(inputData);
  };
  return (
    <div>
      <form onSubmit={(e) => onSave(e)} className="flex flex-col gap-9">
        {formInputs.map((item, index) => (
          <div
            key={index}
            className="flex gap-12 capitalize justify-start items-start "
          >
            <label className="min-w-[8rem] text-gray-600 text-end" htmlFor="">
              {item.labelText} :{" "}
            </label>
            <div className="flex justify-between w-full  items-center border-b-2">
              <input
                name={`${item.labelText.toLocaleLowerCase()}`}
                type="text"
                value={
                  inputActive
                    ? inputData[item.labelText.toLocaleLowerCase()]
                    : item.inputDefaultValue
                }
                onChange={(e) => getInputData(e)}
                className="outline-0  w-full bg-gray-100"
                disabled={inputActive ? false : true}
              />
              <CiEdit
                size={"1.5rem"}
                className="cursor-pointer hover:text-yellow-900 transition-all duration-300"
                onClick={() => setInputActive(true)}
              />
            </div>
          </div>
        ))}

        {inputActive && (
          <div className="mx-auto ">
            <button
              type="submit"
              className="bg-yellow-500 py-1 rounded-full text-lg w-fit mx-auto px-10 me-3"
            >
              save
            </button>
            <button
              className="bg-red-500 py-1 rounded-full text-lg w-fit mx-auto px-10 ms-3"
              type="button"
              onClick={() => setInputActive(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default EmployeeProfile;
