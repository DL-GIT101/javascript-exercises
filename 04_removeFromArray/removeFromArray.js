const removeFromArray = function() {

    let parameter = Array.from(arguments);

    let array = parameter.shift();

    for (let i = 0; i < parameter.length; i++) {
        
        for (let j = 0; j <= array.length; j++){
            
            if(parameter[i] === array[j]) {

                array.splice(j,1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
