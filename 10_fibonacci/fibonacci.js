const fibonacci = function(num) {
  if(num === 0 || num === "0") return 0;
  if(num == 0 || num < 0 || num == undefined) return "OOPS";

  let n1 = 1, n2 = 1, nextNum;
  for(let i = 3; i <= num; i++)
  {
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
  return n2;
};

// Do not edit below this line
module.exports = fibonacci;
