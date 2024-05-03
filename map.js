//map = returns a new array
// map = lai kei ma store garnai parxa

// 1

// const numbers = [1, 2, 3, 4, 5];

// numbers.map(double);

// function double(value, index, number) {
//   return value * 2;
// }

// console.log(numbers)

// 2

// const numbers = [1, 2, 3, 4, 5];

// const numberDouble = numbers.map(double);

// function double(value, index, number) {
//   return value * 2;
// }

// console.log(numberDouble);

//3

// const numbers = [1, 2, 3, 4, 5];

// const numberDouble = numbers.map(multiply);

// function multiply(value, index, number) {
//   return value * index;
// }

// console.log(numberDouble);

//4

// const products = [
//   {
//     name: "laptop",
//     price: 1000,
//     count: 5,
//   },
//   {
//     name: "desktop",
//     price: 1500,
//     count: 2,
//   },
//   {
//     name: "phone",
//     price: 500,
//     count: 10,
//   },
// ];

// const totalProductsValue = products.map((items) => items.price * items.count);

// console.log(totalProductsValue);

//5
// returning the array of object

// const products = [
//   {
//     name: "laptop",
//     price: 1000,
//     count: 5,
//   },
//   {
//     name: "desktop",
//     price: 1500,
//     count: 2,
//   },
//   {
//     name: "phone",
//     price: 500,
//     count: 10,
//   },
// ];

// const totalProductsValue = products.map((items) => ({
//   name: items.price,
//   totalValue: items.price * items.count,
// }));

// console.log(totalProductsValue);

//6
// we can convert array of string to array of numbers

// const str = ['1', '2', '3','4','5']

// const numbers = str.map(Number)
// console.log(numbers)

//7
// same as above

// const str = ["1", "2", "3", "4", "5"];

// const numbers = str.map(item => Number(item));
// console.log(numbers);

//8
// prac

// const persons = [
//   { firstname: "Malcom", lastname: "Reynolds" },
//   { firstname: "Kaylee", lastname: "Frye" },
//   { firstname: "Jayne", lastname: "Cobb" },
// ];

// const a = persons.map(cb);

// function cb(item) {
//   return [item.firstname, item.lastname].join(" ");
// }

// console.log(a);
