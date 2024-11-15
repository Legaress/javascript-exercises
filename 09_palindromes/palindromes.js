const palindromes = function (string = '') {

    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const normalizedString = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    let left = 0;
    let right = normalizedString.length - 1;

    while (left < right) {
        if (normalizedString[left] !== normalizedString[right]) {
            return false; // Early exit if mismatch found
        }
        left++;
        right--;
    }

    return true; // If no mismatches were found
}


// Do not edit below this line
module.exports = palindromes;
