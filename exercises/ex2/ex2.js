"use strict";

const isShortEnough = str => str.length <= 5;
const not = predicate => (...args) => !predicate( ...args );

const when = fn => {
	return predicate => {
		return (...args) => {
			if (predicate( ...args )){
              return fn( ...args );
            }
		};
	};
}

const output = console.log.bind(console);
const printIf = when(output);

const isLongEnough = not(isShortEnough);
let msg1 = "Hello";
let msg2 = `${msg1} World`;

console.log(printIf(isShortEnough)(msg1));		// Hello
console.log(printIf(isShortEnough)(msg2));
console.log(printIf(isLongEnough)(msg1));
console.log(printIf(isLongEnough)(msg2));       //Hello World
