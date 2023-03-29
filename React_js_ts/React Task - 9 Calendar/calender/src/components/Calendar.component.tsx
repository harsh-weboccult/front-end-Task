import React, { useEffect, useState } from "react";
import generateMatrix from "../utils/generateMatrix";
import { months, weekDays } from "../utils/constant.data";
const CurrentDate = new Date();
const Calendar = ({ date = new Date() }: { date: Date }) => {
  const [activeDate, setActiveDate] = useState(date);

  //setting date to current date
  useEffect(() => {
    if (activeDate !== date) {
      setActiveDate(date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  /** for generating month as a matrix  */
  const matrix = generateMatrix(activeDate);

  let row: any = [];

  const checkIsCurrentData = (item: string | number) => {
    return (
      item === date.getDate() &&
      activeDate.getMonth() === CurrentDate.getMonth() &&
      activeDate.getFullYear() === CurrentDate.getFullYear()
    );
  };

  row = matrix.map((row, rowindex) => {
    let rowItem = row.map((item: string | number, itemIndex) => {
      return (
        <span
          key={itemIndex}
          className={checkIsCurrentData(item) ? "active" : ""}
        >
          {item !== 0 ? item : ""}
        </span>
      );
    });

    return (
      <div className="calender__mid" key={rowindex}>
        {rowItem}
      </div>
    );
  });

  /** for Changing Month  */
  const nextMonth = (n: number) => {
    const newDate = new Date(activeDate.setMonth(activeDate.getMonth() + n));
    setActiveDate(newDate);
  };

  /** for previous month */
  const prevMonth = (n: number) => {
    console.log("activeDate", activeDate.getMonth());
    const toSetMonth = activeDate.getMonth() - 1;
    console.log("toSetMonth", toSetMonth);
    const date = new Date(activeDate);
    console.log(date);
    date.setMonth(toSetMonth);
    setActiveDate(date);
    console.log(new Date(activeDate.setMonth(activeDate.getMonth())), "month");
  };

  /** push to current Data */
  const moveToCurrentDate = () => {
    const CurrentDate1 = new Date();
    setActiveDate(CurrentDate1);
  };
  return (
    <>
      <section>
        <div className="calender__box">
          <div className="title">
            <h2>calender</h2>
          </div>
          {/* HEADER */}
          <div className="calender__top">
            <button onClick={() => prevMonth(1)}>{"<"}</button>
            <h1>
              {months[activeDate.getMonth()]}-{activeDate.getFullYear()}
            </h1>
            <button onClick={() => nextMonth(1)}>{">"}</button>
          </div>
          {/* HEADER */}
          {/* WEEKDAYS HEADER */}
          <div className="calender__mid" style={{ padding: "20px 0" }}>
            {weekDays.map((ele, index) => {
              return <span key={index}>{ele}</span>;
            })}
          </div>
          {/* WEEKDAYS HEADER */}
          {/* MAIN CONTAINER */}
          <div className="calender__container">{row}</div>
          {/* MAIN CONTAINER */}
          {/* FOOTER */}
          <div className="button__section calender__mid">
            <button className="btn" onClick={() => moveToCurrentDate()}>
              Today
            </button>
            <select name="" id=""></select>
            <select name="" id=""></select>
            <select name="" id=""></select>
            <button className="btn__find" onClick={() => moveToCurrentDate()}>
              Find
            </button>
          </div>
          {/* FOOTER */}
        </div>
      </section>
    </>
  );
};

export default Calendar;
