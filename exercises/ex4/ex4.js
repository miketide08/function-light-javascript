"use strict";

lotteryNum = () => (Math.round(Math.random() * 100) % 58) + 1;

pickNumber = (nums) => {
	let newNums = nums.slice();
	let num;
  
	do {
		num = lotteryNum();
	} while (newNums.indexOf(num) != -1);
  
	newNums.push(num);
	newNums.sort(function(a,b){
		return a - b;
	});
  
	return newNums;
}

let luckyLotteryNumbers = [];

for (let i = 0; i < 6; i++) {
	luckyLotteryNumbers = pickNumber(Object.freeze(luckyLotteryNumbers));
}

console.log(luckyLotteryNumbers);