// Importing using require from Common JS Module
require("./xyz.js");

// Importing function alone using Common JS Module
// const calculateSum = require("./sum.js");

// Destructing as entire object and importing them using Common JS Module
// const obj = require("./sum.js");
// Another way
// const obj = require("./sum");

// Destructing on the fly and importing them using Common JS Module
// const { calculateSum } = require("./calculate/sum.js");
// const { calculateMultiply } = require("./calculate/multiply.js");
// Another way
// const { calculateSum } = require("./calculate/sum");
// const { calculateMultiply } = require("./calculate/multiply");

// import from them index
// const { calculateMultiply, calculateSum } = require("./calculate/index.js");
// We can also do this
const { calculateMultiply, calculateSum } = require("./calculate");

const util = require("node:util");

const dataJson = require("./data.json");

// ES Module Way of importing
// import { x, calculateSum } from "./sum.js";

var name = "Namaste Node Js";

var a = 10;

var b = 30;

calculateSum(a, b);
calculateMultiply(a, b);

console.log(dataJson);

console.log(JSON.stringify(dataJson));

console.log(global === globalThis);
