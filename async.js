const fs = require("fs");
// Another way of importing the module
// const fs = require("node:fs");
// Another way of importing the module
const https = require("https");
// const https = require("node:https");

console.log("Hello World");

var a = 10;
var b = 20;

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("Fetched Data Successfully");
});

// Synchrous way of doing file read operation it will block the main thread do not do it but know it is present
fs.readFileSync("./data.txt", "utf-8");
console.log("Value read from the file 2");

fs.readFile("./data.txt", "utf-8", (err, value) => {
  console.log("Value read from the file");
});

setTimeout(() => {
  console.log("Set timeout executed successfully");
}, 5000);

function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);

console.log("Multiplication Result is", c);
