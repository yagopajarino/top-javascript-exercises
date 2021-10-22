const fibonacci = function(n) {
    n = parseInt(n)
    if (n < 1)  return "OOPS";
    if (n === 1) {
        return 1
    }
    else if (n === 2) {
        return 1
    }
    else {
        return fibonacci(n-1) + fibonacci(n-2)
    }
};

// Do not edit below this line
module.exports = fibonacci;
