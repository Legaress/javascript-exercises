const sumAll = function(firstNum = 0, secondNum = 0) {
	
    // Validate input: both must be non-negative integers
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum) || firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }

    // Ensure firstNum is less than or equal to secondNum
    if (firstNum > secondNum) {
        [firstNum, secondNum] = [secondNum, firstNum];
    }

    // Use the formula for the sum of an arithmetic series
    const count = secondNum - firstNum + 1; // Total numbers in the range
    const sum = (count * (firstNum + secondNum)) / 2; // Arithmetic series sum formula

    return sum;
};


// Do not edit below this line
module.exports = sumAll;
