/**
 * Output:
 * Last line of the file.
 * nextTick
 * inner nextTick
 * Timer expired
 * Immediate Operation
 * File Reading CB
 */

const fs = require("fs");
setImmediate(
  () => console.log("Immediate Operation"),
  fs.readFile("./data.txt", "utf8", () => {
    console.log("File Reading CB");
  })
);
setTimeout(() => console.log("Timer expired"), 0);
Promise.resolve("Promise").then(console.log);
process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});
console.log("Last line of the file.");
