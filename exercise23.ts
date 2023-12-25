// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const companies = ["honda", "toyota", "mercedes", "bmw"];
console.log(companies[10]);

if (companies[10]=== undefined){
    console.log("Index is out of bounds.");
}