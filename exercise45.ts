//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// function createCar(manufacturer:string, model:string, ...options : any[]) {
//   let car = {
//       manufacturer: manufacturer,
//       model: model,
//   };
//   for (let i = 0; i < options.length; i += 2) {
//       for (let j = 0; j < Object.keys(options[i]).length; j++) {
//           let keys = Object.keys(options[i]);
//           let values = Object.values(options[i]);
//           let key = keys[j];
//           let value = values[j];
//           car[key] = value;
//       }
//   }
//   return car;
// }
// let car1 = createCar('honda', '2019', { color: 'blue', transmission: 'automatic' });
// let car2 = createCar('toyota', '2011');
// console.log(car1);
// console.log(car2);
