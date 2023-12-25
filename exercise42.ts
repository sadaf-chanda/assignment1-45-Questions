//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magiciansNames = ["magician1", "magician2", "magician3", "magician4"];
function make_great1(magicians : string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great ";
    }
}
function show_magicians2(magicians : string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
make_great1(magiciansNames);
show_magicians2(magiciansNames);
