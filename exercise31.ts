//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames1 = ["admin", "Ehla", "Saman", "Sana", "Ali"];
for (let i = 0; i < usernames1.length; i++) {
    console.log(usernames1[i]);
}
if (usernames1.length > 0) {
    console.log("We have some users!");
}
else {
    console.log("We need to find some users!");
}
usernames1 = [];
if (usernames1.length > 0) {
    console.log("We have some users!");
}
else {
    console.log("We need to find some users!");
}
//console.log(usernames1)