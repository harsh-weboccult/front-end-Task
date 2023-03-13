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
function add(a, b) {
  return a + b;
}
add(4, 10);
//rewrite above function
function add1(a, b) {
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
function MaybeBrock() {
  throw { message: "this code is brocken" };
}
MaybeBrock();
