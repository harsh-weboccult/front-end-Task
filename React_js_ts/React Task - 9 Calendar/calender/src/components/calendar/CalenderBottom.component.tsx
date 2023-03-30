import React, { useState } from "react";
import { months, expectedYear } from "../../utils/constant.data";
import generateMatrix from "../../utils/generateMatrix";

const CurrentDate1 = new Date();

interface props {
  setActiveDate: React.Dispatch<React.SetStateAction<Date>>;
  matrix: (number | string)[][];
  setHighLightDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalenderBottom = ({ setActiveDate, matrix, setHighLightDate }: props) => {
  const [day, setDay] = useState<any>();
  const [month, setMonth] = useState<number>(-1);
  const [year, setYear] = useState<number>(1970);
  const [days, setDays] = useState<(number | string)[][]>([]);
  /** push to current Data */
  const moveToCurrentDate = () => {
    setActiveDate(CurrentDate1);
    setHighLightDate(CurrentDate1);
  };

  const moveToSpecificDate = () => {
    console.log(month, "click");

    if (month < 0) {
      alert("select month");
      return;
    }

    if (!day) {
      const newDate = new Date(year, month);
      setActiveDate(newDate);
      console.log("month", new Date(month));
    } else {
      setActiveDate(new Date(year, month, day));
      setHighLightDate(new Date(year, month, day));
    }
  };

  const onMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(+e.target.value);
    console.log(month, "by function");
    matrix = generateMatrix(new Date(year, +e.target.value));
    setDays(matrix);
  };

  return (
    <div className="button__section calender__mid">
      <button className="btn" onClick={() => moveToCurrentDate()}>
        Today
      </button>
      <select
        name=""
        id=""
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          let selectedYear = e.target.value;
          setYear(+selectedYear);
        }}
      >
        {expectedYear[0].map((eYear) => {
          return (
            <option key={eYear} value={eYear}>
              {eYear}
            </option>
          );
        })}
      </select>
      <select
        name=""
        id=""
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onMonthChange(e)}
      >
        <option value=""> select month </option>
        {months.map((month, index) => {
          return (
            <option key={index} value={index}>
              {month}
            </option>
          );
        })}
      </select>
      <select
        name=""
        id=""
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          setDay(+e.target.value);
        }}
      >
        <option value="Date">Date</option>
        {year && (
          <>
            {days
              .flat()
              .filter((e) => e !== 0)
              .map((e) => (
                <option key={e}>{e}</option>
              ))}
          </>
        )}
      </select>
      <button className="btn__find" onClick={moveToSpecificDate}>
        Find
      </button>
    </div>
  );
};

export default CalenderBottom;
