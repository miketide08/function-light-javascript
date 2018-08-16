"use strict";
const foo = x => {
	y++;
	z = x * y;
)

const bar = (curX, curY) => {
	let [origY, origZ] = [y, z];
	y = curY;
	
	foo(curX);

	let [newZ, newY] = [z, y];
	[z, y] = [origZ, origY];
	
	return [newY, newZ];
}

/* This example required the use of var here so the funcions
   could access these global scoped variables. The let and const 
   variables don't allow this type of scoping. 
*/
var y, z; 

console.log(bar(30, 7));	// [8, 240]
console.log(bar(40, 3));	// [4, 160]
