//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car='subaru';
let color='blue';
let speed=100;
let model='impreza';

console.log("Is car=='subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car=='toyota'? I predict False.");
console.log(car == 'toyota')

console.log("Is color == 'blue' && speed == 100? I predict True.");
console.log(color == 'blue' && speed == 100);

console.log("Is color == 'red' || speed==80? T predict False.");
console.log(color == 'red' || speed == 80);

console.log("Is model != 'corolla'? I predict True.");
console.log(model != 'corolla');

console.log("Is model!= 'impreza'? I predict False.");
console.log(model != 'impreza');

console.log("Is speed > 50? I predict True.");
console.log(speed > 50);

console.log("Is speed < 50? I predict False.");
console.log(speed < 50);

console.log("Is  car + ' ' + model == 'subaru impreza'? I predict true.")
console.log(car + ' ' + model == 'subaru impreza');

console.log("Is car + ' ' + model == 'toypta corolla'? I predict False.");
console.log(car + ' ' + model == 'toyota corolla');
