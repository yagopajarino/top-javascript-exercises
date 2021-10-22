const repeatString = function(s, n) {
    if (n < 0) {
        return "ERROR"
    }
    let exit = ""
    for (let i = 0; i < n; i++) {
        exit += s
    }
    return exit
};

// Do not edit below this line
module.exports = repeatString;
