import React, { useEffect, useState } from "react";
import generateMatrix from "../utils/generateMatrix";
import { months, weekDays } from "../utils/constant.data";
import CalenderTop from "../components/calendar/CalenderTop.component";
import CalenderMid from "../components/calendar/CalenderMid.component";
import CalenderBottom from "../components/calendar/CalenderBottom.component";


const Calendar = ({ date = new Date() } : { date: Date }) => {
  const [activeDate, setActiveDate] = useState<Date>(date);
  const [highlightDate, sethighlightDate] = useState(new Date());
  
  
 console.log(activeDate,"for active Date");
 console.log(highlightDate, "for current Date");
 

  useEffect(() => {
    if (activeDate !== date) {
       setActiveDate(date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  /** for generating month as a matrix  */
  const checkIsCurrentData = (item: string | number) => {
   
    
    return (
      (item === highlightDate.getDate())&&(months[activeDate.getMonth()] === months[highlightDate.getMonth()])&&(activeDate.getFullYear()===highlightDate.getFullYear())
    );
  };

  const matrix = generateMatrix(activeDate);

  let row: any = [];

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

  /*  console.log("test", typeof setActiveDate);*/

  return (
    <>
      <section>
        <div className="calender__box">
          <div className="title">
            <h2>calender</h2>
          </div>
          {/* HEADER */}
          <div className="calender__top">
            <CalenderTop
              activeDate={activeDate}
              setActiveDate={setActiveDate}
            />
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
          <CalenderMid row={row} />
          {/* MAIN CONTAINER */}

          {/* FOOTER */}
          <CalenderBottom
            setActiveDate={setActiveDate}
            matrix={matrix}
            sethighlightDate={sethighlightDate}
          />
          {/* FOOTER */}
        </div>
      </section>
    </>
  );
};

export default Calendar;
