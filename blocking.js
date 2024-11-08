const crypto = require("crypto");

console.log("Hello World");

var a = 10;
var b = 20;

// pbkdf2 -  Password Base Key Deravtive Function

// This will block the main thread and only after it is completed First Key is generated will be printed and till then the main thread waits
console.log("========");
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First Key is generated");

setTimeout(() => {
  console.log("call me right now !!!! ");
}, 0); // it will only be called once call stack of main thread is empty

crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (res, key) => {
  console.log("Second Key is generated");
});

function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);

console.log("Multiplication Result is", c);
