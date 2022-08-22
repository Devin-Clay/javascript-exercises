const repeatString = function(string, repititions) {
    if(repititions < 0) return 'ERROR';
    let output = '';
    for (let i = 0; i < repititions; i++) 
    {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
