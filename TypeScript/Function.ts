/*function without type script
Because of it is javascript function it can not check for data type
function add(a, b) {
  return a + b;
}
add(4,10); 14
add('4'+10);410
*/

// rewrite above function using typescript

//now this function only take number and return number
function add(a: number, b: number): number {
  return a + b;
}
add(4, 10);

//if function take number and string and return number or string
type val = number | string;

//rewrite above function

function add1(a: val, b: val) {
  if (typeof a == "number" || typeof b == "number") {
    return +a + +b;
  } else {
    return a + b;
  }
}
add1(4, 10);

//it function is not return anything it is void

// function print(): void {
//   console.log("hello world");
// }
// print();
// if a function  in handle a code that is high chance of brock

function MaybeBrock(): never {
  throw { message: "this code is brocken" };
}

MaybeBrock();
