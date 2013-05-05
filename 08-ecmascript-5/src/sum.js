// list 8-18 暗黙のグローバル

function sum (numbers) {
	"use strict";

	var sum = 0;

	for (i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}

	return sum;
}