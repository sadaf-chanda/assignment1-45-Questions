//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great(magicians : string[]) {
    let greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the Great ');
    }
    return greatMagicians;
}
function show_magicians(magicians:string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
let magicianNames = ['magician 1', 'magician 2', 'magician 3', 'magician 4'];
let magicianNamesCopy = [...magicianNames];
let greatMagiciansNames = make_great(magicianNamesCopy);
console.log("Original Magician Names:");
show_magicians(magicianNames);
console.log("\nGreat Magician Names:");
show_magicians(greatMagiciansNames);
