console.log("Hello World");

// Even though we have given 0 seconds it will not be executed after 0 seconds it will be executed 0 seconds after the call stack has been empty and that is why there are trust issue with setTimeout
setTimeout(() => {
  console.log("Call me ASAP");
}, 0);

var a = 10;
var b = 20;

function multiply(a, b) {
  const result = a * b;
  return result;
}

var c = multiply(a, b);

console.log("Multiplication Result is", c);
