const removeFromArray = function() {
    let arr = arguments[0]
    for (let j = 1; j < arguments.length; j++) {
        let n = arguments[j]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === n) {
                arr.splice(i,1)
            }
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
