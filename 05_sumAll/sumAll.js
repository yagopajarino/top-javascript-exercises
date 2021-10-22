const sumAll = function(a,b) {
    if ((a < 0) | (b < 0)) {
        return "ERROR"
    }
    if ((typeof(a) != "number") | (typeof(b) != "number")) {
        return "ERROR"
    }
    let desde, hasta
    if (a < b) {
        desde = a
        hasta = b
    }
    else {
        desde = b
        hasta = a
    }
    let s = 0
    for (let i = desde; i < hasta+1; i++) {
        s += i
    }
    return s
};

// Do not edit below this line
module.exports = sumAll;
