import { daysInEachMonth } from "./constant.data";

export default function generateMatrix(currentDate: Date) {
  // making 2d Matrix
  let matrix: (number | string)[][] = [];
  // console.log(currentDate, "12");

  // Create header of days
  //   matrix[0] = weekDays;
  //get selected year
  let year = currentDate.getFullYear();
  // get selected month
  let month = currentDate.getMonth();
  // get  first day
  let firstDay = new Date(year, month, 1).getDay();
  // console.log(firstDay);

  // find maxDays based on number of days in each month
  let maxDays = daysInEachMonth[month];

  if (month === 1) {
    // checking leap year in February
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      maxDays += 1;
    }
  }

  let counter = 1;
  for (let row = 1; row < 7; row++) {
    matrix[row] = [];
    for (let col = 0; col < 7; col++) {
      matrix[row][col] = 0;

      if (row === 1 && col >= firstDay) {
        // in first row the date should start from the from day of the week
        matrix[row][col] = counter++;
      } else if (row > 1 && counter <= maxDays) {
        matrix[row][col] = counter++;
      }
    }
  }
  console.log(matrix);

  return matrix;
}
