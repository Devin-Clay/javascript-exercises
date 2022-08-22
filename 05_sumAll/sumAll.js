const sumAll = function(int1, int2) {
    if(!Number.isInteger(int1) || !Number.isInteger(int2)) return 'ERROR';
    else if (int1 < 0 || int2 < 0) return 'ERROR';

    let average = (int1 + int2) / 2;
    let digitCount = Math.abs(int2 - int1) + 1;
    let sum = average * digitCount;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
