"use strict";

function foo(x) {
	y++;
	z = x * y;
}

function bar(curX, curY) {
	var [origY, origZ] = [y, z];
	y = curY;
	
	foo(curX);

	var [newZ, newY] = [z, y];
	[z, y] = [origZ, origY];
	
	return [newY, newZ];
}

var y, z;

bar(30, 7);	// [8, 240]
bar(40, 3);	// [4, 160]
