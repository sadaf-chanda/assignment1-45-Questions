//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits=["mango","apple","banana"];
if(favourite_fruits.includes("mango")){
    console.log("You really like mangoes!");

}
if(favourite_fruits.includes("apple")){
    console.log("You really like apples!");
}

if(favourite_fruits.includes("banana")){
    console.group("You really like banana!");
}

if(favourite_fruits.includes("orange")){
    console.log("You really like oranges!");
}

if(favourite_fruits.includes("kiwi")){
    console.log("You really like kiwi!");
}