"use strict";

const multiply = (acc, num, ...nums) => {
	acc *= num;
    return nums.length === 0 ? acc : multiply(acc, ...nums);
};

console.log(multiply(3, 4, 5)); // 60
console.log(multiply(3, 4, 5, 6)); // 360
