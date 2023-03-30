import React from "react";
import { months } from "../../utils/constant.data";

/** for Changing Month  */

interface Props {
  activeDate: Date;
  setActiveDate: React.Dispatch<React.SetStateAction<Date>>;
}

const CalenderTop = ({ activeDate, setActiveDate }: Props) => {
  const nextMonth = (n: number) => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + n));
    setActiveDate(newDate);
  };

 

  /** for previous month */
  const prevMonth = (n: number) => {
    //  console.log("activeDate", activeDate.getMonth());
    const toSetMonth = activeDate.getMonth() - 1;
    //  console.log("toSetMonth", toSetMonth);
    const date = new Date(activeDate);

    date.setMonth(toSetMonth);
    setActiveDate(date);
    console.log(new Date(activeDate.setMonth(activeDate.getMonth())), "month");
  };
  return (
    <>
      <button onClick={() => prevMonth(1)}>{"<"}</button>
      <h1>
        {months[activeDate.getMonth()]}-{activeDate.getFullYear()}
      </h1>
      <button onClick={() => nextMonth(1)}>{">"}</button>
    </>
  );
};

export default CalenderTop;
