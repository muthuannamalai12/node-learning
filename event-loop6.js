/**
 * Output:
 * Last line of the file.
 * nextTick
 * inner nextTick
 * Immediate Timeout Operation
 * Immediate Operation
 * File Reading CB From SetImmediate
 * File Reading CB From SetTimeout
 */

const fs = require("fs");
setImmediate(
  () => console.log("Immediate Operation"),
  fs.readFile("./data.txt", "utf8", () => {
    console.log("File Reading CB From SetImmediate");
  })
);

setTimeout(
  () => console.log("Immediate Timeout Operation"),
  fs.readFile("./data.txt", "utf8", () => {
    console.log("File Reading CB From SetTimeout");
  }),
  0
);
Promise.resolve("Promise").then(console.log);
process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});
console.log("Last line of the file.");
