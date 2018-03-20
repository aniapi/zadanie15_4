// Zadanie pierwsze

const hello = "Hello";
const world = "World";

function sayHello() {
	return (`${hello} ${world}`);
}
console.log(sayHello());

// Zadanie drugie

// function multiply(a,b) {
// 	return(a*b)
// };
// console.log(multiply(2,5));

let multiply = (a,b) => { return((a || 1)*(b || 1)) };
console.log(multiply(5));

// Zadanie trzecie

let sum = (arg) => arg.reduce((previous, current) => (previous + current));
let average = (...arg) => {return(sum(arg)/arg.length)};
console.log(average(1)); // 1
console.log(average(1, 3)); // 2
console.log(average(1, 3, 6, 6)); // 4

// Zadanie czwarte

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

// Zadanie piąte
 
const names = [1, 4, 'Iwona', false, 'Nowak'];
const [first, second, third, fourth, fifth] = names;
console.log(third + ' ' + fifth);

