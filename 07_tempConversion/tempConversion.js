const ftoc = function(f) {
  let n = (f - 32) * 5/9
  if (Number.isInteger(n)) {
    return n
  }
  else {
    return (Number(n.toFixed(1)))
  }
}

const ctof = function(c) {
  let n = c * 9/5 + 32
  if (Number.isInteger(n)) {
    return n
  }
  else {
    return (Number(n.toFixed(1)))
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
