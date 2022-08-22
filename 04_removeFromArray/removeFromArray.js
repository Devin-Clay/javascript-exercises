const removeFromArray = function(...args) 
{    
    switch(args.length)
    {
        case 0: return null;
        case 1: return args[0];
        default:
            let array = args.shift();
            let toBeRemoved = args.pop();
            let output = [];
            for(let i = 0; i < array.length; i++)
            {
                if(array[i] !== toBeRemoved)
                {
                    output.push(array[i]);
                }
            }
            return removeFromArray(output, ...args);
    }
    

};


// Do not edit below this line
module.exports = removeFromArray;
