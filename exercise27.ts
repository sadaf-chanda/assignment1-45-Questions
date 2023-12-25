//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alienColor3 = "green";
let points = 0;
if (alienColor3 === "green") {
    points = 5;
    console.log("You earned 5 points.");
}
else if (alienColor3 === "yellow") {
    points = 10;
    console.log("You earned 10 points.");
}
else if (alienColor3 === "red") {
    points = 15;
    console.log("You earned 15 points.");
}
else {
    console.log("Invalid color.");
}
//By switch case method:
let alienColor = "yellow";
points = 0;
switch (alienColor) {
    case "green":
        points = 5;
        console.log("You earned 5 points");
        break;
    case "yellow":
        points = 10;
        console.log("You earned 10 points");
        break;
    case "red":
        points = 15;
        console.log("You earned 15 points");
        break;
    default:
        console.log("Invalid color.");
}
