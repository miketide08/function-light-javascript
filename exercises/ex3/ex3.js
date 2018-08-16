"use strict";

const increment = x => x + 1;
const decrement = x => x - 1; 
const double = x => x * 2; 
const half = x => x / 2;

const compose = (...fns) => {
  return result => {
	for (let i = fns.length-1; i>=0; i--) result = fns[i](result);
    return result;
  };
}

const pipe = (...fns) => {
  return result => {
    for (let i = 0; i < fns.length; i++) result = fns[i](result);
    return result;
  };
}

const f = compose(decrement, double, increment, half);
const p = pipe(half, increment, double, decrement);

console.log(f(3) === 4);    // true
console.log(f(3) === p(3)); // true
