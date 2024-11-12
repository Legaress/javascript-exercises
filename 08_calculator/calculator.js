const add = function(a,b) {
	return a + b;	
};

const subtract = function(a,b) {
	return a - b;	
};

const sum = function(array) {
	return array.reduce((total,currentValue) => total + currentValue, 0);	
};
const multiply = function(array) {
	return array.reduce((product,currentValue) => product * currentValue, 1);	
};

const power = function(base,exponent) {
	return Math.pow(base,exponent);
};

const factorial = function( n ) {
	
	if(n === 0 ){
		return 1;
	}

	let res = 1;

	for(let i = 2; i <= n; i++){
		res *= i
	}

	return res;

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
