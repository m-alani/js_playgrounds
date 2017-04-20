"use strict";

const admin = "John";
let user = "Marwan";
console.log(`The admin is ${admin}.`); // The admin is John

let x = "A", y = 3;
console.log(isNaN(x / y)); // true

console.log("" - 1); // -1 (Number("") = 0)
console.log(4 + 5 + "px"); // 9px (left to right, add numbers)
console.log("4px" - 2); // NaN (Number("4px") would return a NaN when it gets to the "px" part)
console.log(null + 1); // 1 (Number(null) = 0)
console.log(undefined + 5); // NaN (Number(undefined) = NaN)

x = "322";
console.log(+x + 4); // 326 (as a number)

console.log(60 - (x = 12 + 5)); // 43 ("=" returns a value too)
console.log(x); // 17

x = (y = 11, 9);
console.log(x + y); // 20

console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(undefined >= null); // false (huh?)
