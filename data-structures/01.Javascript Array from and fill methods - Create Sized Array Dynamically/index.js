// Union-dimensional Array  simple mean an arrays of things
let arr = [1, 2, 3];

console.table(arr);

// Multi-Dimensional Arrays simple mean nested arrays
let activities = [
  ["Work", 9],
  ["Eat", 1],
  ["Commute", 2],
  ["Play Game", 1],
  ["Sleep", 7],
];

console.table(activities);

/// How to populate the same arrays in javascript by using the Array.fill()
let nItems = new Array(1000).fill(1);
console.log("Array.fill", nItems);

/// How to populate different arrays in javascript by using the Array.from()
let nItemsFrom = Array.from({ length: 1000 }, (_, i) => i + 1);

console.log("Array.ffrom", nItemsFrom);
