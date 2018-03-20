"use strict";

// Zadanie pierwsze

var hello = "Hello";
var world = "World";

function sayHello() {
  return hello + " " + world;
}
console.log(sayHello());

// Zadanie drugie

// function multiply(a,b) {
// 	return(a*b)
// };
// console.log(multiply(2,5));

var multiply = function multiply(a, b) {
  return (a || 1) * (b || 1);
};
console.log(multiply(5));

// Zadanie trzecie

var sum = function sum(arg) {
  return arg.reduce(function (previous, current) {
    return previous + current;
  });
};
var average = function average() {
  for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  return sum(arg) / arg.length;
};
console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

// Zadanie czwarte

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average.apply(undefined, grades));

// Zadanie piąte

var names = [1, 4, 'Iwona', false, 'Nowak'];
var first = names[0],
    second = names[1],
    third = names[2],
    fourth = names[3],
    fifth = names[4];

console.log(third + ' ' + fifth);
