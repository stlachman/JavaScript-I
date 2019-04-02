// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// Example
// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

// First Conversion
// let myFunction = () => {
//   console.log("Function was invoked!");
// };
// myFunction();

// Second Conversion
let myFunction = () => console.log("Function was invoked!");
myFunction();


// Example
// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

// First Conversion
// let anotherFunction = (param) => {
//   return param;
// }
// console.log(anotherFunction("Example"));

// Second Conversion
let anotherFunction = param => param;
console.log(anotherFunction("Example"));


// Example
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);


// First Conversion
// let add = (param1, param2) => {
//   return param1 + param2;
// };

// console.log(add(1,2));


// Second Conversion
let add = (param1, param2) => param1 + param2;
console.log(add(1,2));


// Example
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

// First Conversion
// let subtract = (param1, param2) => {
//   return param1 - param2;
// };
// console.log(subtract(1, 2));

// Second Conversion
let subtract = (param1, param2) => param1 - param2;
console.log(subtract(1, 2));




// Stretch

exampleArray = [1,2,3,4];
// Example
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

// First Conversion
// const triple = exampleArray.map(num => {
//   return num * 3;
// });
// console.log(triple);

// Second Conversion
const triple = exampleArray.map(num => num * 3);
console.log(triple);
