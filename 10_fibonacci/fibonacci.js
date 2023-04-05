const fibonacci = function(sequence) {
    if (sequence < 0){
        return "OOPS";
    }
    let first = 0;
    let second = 1;
    let sum;
    for(let i = 1; i < sequence; i++){
        sum = first + second;
        first = second;
        second = sum;
    }
        return second;
};

// Do not edit below this line
module.exports = fibonacci;
