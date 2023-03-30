import React from 'react'

interface props
{
    row:number|string;
}
const CalenderMid = ({row}:props) => {
  return (
    <>
      <div className="calender__container">{row}</div>
    </>
  );
}

export default CalenderMid