const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
	return nums.reduce((total, num) => {
    return total + num}, 0);
};

const multiply = function(nums) {
  return nums.reduce((total, num) => {
    return total * num}, 1);
  };

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	//if (n === 0) return 1;
  output = 1;
  for(let i = 2; i <= num; i++) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
