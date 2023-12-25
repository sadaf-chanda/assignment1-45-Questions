//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items


const Person = [{
  name: "alice",
  age: 25,
  hobbies: ["reading", "writing"]
}, {
  name: "ali",
  age: 22,
  hobbies: ["sleeping", "writing"]
}];
for (let i = 0; i < Person.length; i++) {
console.log(`name:${Person[i].name}`);
console.log(`age:${Person[i].age}`);
console.log(`hobbies:${Person[i].hobbies}`);
}
