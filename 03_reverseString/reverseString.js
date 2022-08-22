const reverseString = function(string) {
    let output = '';
    for (let i = 0; i < string.length; i++)
    {
        charIndex = string.length - 1 - i;
        output += string.slice(charIndex, charIndex + 1);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
