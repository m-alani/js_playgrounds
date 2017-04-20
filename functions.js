'use strict';

let myFunction = function (text = "Nothing") {
  console.log(text);
}

myFunction(); // Nothing

myFunction('Passed parameter'); // Passed parameter

function defaultText() {
  return "No text";
}
myFunction = function (text = defaultText()) { // excuted only if no parameter is passed
  console.log(text);
}

myFunction(); // No text

console.log(myFunction); // [Function: myFunction]

let sum = (arg1, arg2) => arg1 + arg2;
console.log(sum(3,11)); // 14
