//first way

// const userData :object ={
//     name:'harsh',
//     age:15
// }

//console.log(userData.name);    //now we cant access any key of an object like this because the string id empty

//for that use this

//s way
type myobject = { name: string; age: number };

const userData1: myobject = {
  name: "harsh",
  age: 18,
};

console.log(userData1.name);

//union
let roll_no: string | number = 10;

//literal

let Roll_no: "harsh" | 12 = 12;
