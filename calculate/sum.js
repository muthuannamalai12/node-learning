// Modules protects its variables, members and functions

// var x = 10;

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// Way to export the function using Common JS Module
// module.exports = calculateSum;

// Old way of exporting using Common JS Module
// module.exports = {
//   x: x,
//   calculateSum: calculateSum,
// };

// console.log(module.exports);

// module.exports is an empty object and we can add values to it like below
// module.exports.x = x;
// module.exports.calculateSum = calculateSum;

// New way of exporting using Common JS Module
module.exports = {
  calculateSum,
};

// ES Module Way of exporting

// export var x = 10;

// export function calculateSum(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }
