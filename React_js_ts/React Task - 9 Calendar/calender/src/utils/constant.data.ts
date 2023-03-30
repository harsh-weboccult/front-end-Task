export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const daysInEachMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

 const startYear= 1970;
 const endYear =2070;
 const years=[];
 for (let  start = startYear; start <= endYear; start++) {
    years.push(start);
 }

 export const expectedYear=new Array(years);
 
 //let yr = startYear;

//export const arr = new Array(endYear - startYear).fill(1).map(e => yr++)
