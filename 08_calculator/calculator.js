const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(adds) {
  let total = 0;
	for (let add of adds){
    total += add;
  }
  return total;
};

const multiply = function(multipliers) {
  let product = 1;
	for (let multiplier of multipliers){
    product *= multiplier;
  }
  return product;
};

const power = function(num,exponent) {
  let product =1;
	for(let i = 0; i < exponent; i++){
    product *= num;
  }return product;
};

const factorial = function(natural) {
	let result = 1;
  if(natural == 0){
    return result;
  } else {
    for(let i = 1; i <= natural; i++){
      result *= i;
    }
    return result;
  }
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
