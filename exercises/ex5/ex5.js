"use strict";
// Eager algorithim: Calculates sum outside of returned function. Could be expensive task
// Lazy algorithim - sum is not calculated until x(); calls
const foo = (x, y) => {
    let sum;
    return () => sum = x + y : sum;
}
  
const x = foo(3, 4);

console.log(x()); // 7
console.log(x()); // 7
