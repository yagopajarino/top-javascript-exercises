const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function() {
	let args = Array.from(arguments)[0];
  if (args.length === 0) {
    return 0
  }
  return args.reduce(function(prev, act) {
    return prev + act;
  })
};

const multiply = function(a) {
  return a.reduce(function(prev, act) {
    return prev * act;
  });
}

const power = function(a,b) {
	return a ** b
};

const factorial = function(n) {
	if(n === 0) {return 1}
  else {return n*factorial(n-1)}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
