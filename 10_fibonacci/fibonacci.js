const PHI = (1 + Math.sqrt(5)) / 2;
const PSI = (1 - Math.sqrt(5)) / 2; // Conjugate of PHI

const fibonacci = function(n) {
    // Convert string input to number
    if (typeof n === 'string') {
        n = parseInt(n, 10); // Convert string to integer
    }

    // Input validation
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return "OOPS";
    }

    // Binet's formula to calculate the nth Fibonacci number
    const fibN = (Math.pow(PHI, n) - Math.pow(PSI, n)) / Math.sqrt(5);
    
    return Math.round(fibN);
};

// Do not edit below this line
module.exports = fibonacci;
