//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let s1:string = "apple";
let s2:string = "orange";
console.log("Equality Test:", s1 === s2);  
console.log("Inequality Test:", s1 !== s2);  

let s3:string="Hello";
let s4:string="HELLO";
console.log(s3.toLowerCase() == s4.toLowerCase());
console.log(s3.toLowerCase() != s4.toLowerCase());

let n1:number =10;
let n2:number=20;
let n3:number=30;
console.log(n1 == n2);
console.log(n1 != n2);
console.log(n1 > n2);
console.log(n1 < n2);
console.log(n1 >= n2);
console.log(n1 <= n2);
console.log(n1 == n3);
console.log(n1 != n3);
console.log(n1 > n3);
console.log(n1 < n3);
console.log(n1 >= n2);
console.log(n1 <= n2);

let b1: boolean=true;
let b2: boolean=false;
console.log(b1 && b2);
console.log(b1 || b2);
console.log(b1 && b1);
console.log(b2 || b2);

let a1:number[] =[1,2,3,4,5];
let a2:string[] =["a","b","c","d","e"];
console.log(a1.includes(3));
console.log(a1.includes(6));
console.log(a2.includes("c"));
console.log(a2.includes("f"));

console.log(!a1.includes(3));
console.log(!a1.includes(6));
console.log(!a2.includes("c"));
console.log(!a2.includes("f"));