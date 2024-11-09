/**
 * Output:
 * Last line of the file.
 * nextTick
 * Promise
 * Timer expired
 * setImmediate
 * File Reading CB
 * 2nd nextTick
 * 2nd setImmediate(This will be printed because the loop waits at pool stage and then moves to check)
 * 2nd timer
 */

const fs = require("fs");
setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Timer expired"), 0);
Promise.resolve("Promise").then(console.log);
fs.readFile("./data.txt", "utf8", () => {
  setTimeout(() => console.log("2nd timer"), 0);
  process.nextTick(() => console.log("2nd nextTick"));
  setImmediate(() => console.log("2nd setImmediate"));
  console.log("File Reading CB");
});
process.nextTick(() => console.log("nextTick"));
console.log("Last line of the file.");
