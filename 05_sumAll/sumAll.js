const sumAll = function(range1, range2) {

    if (typeof range1 == "number" &&  typeof range2 == "number"){

        if ( range1 < 0 || range2 < 0 ) {
            return "ERROR";
        } else {
            
            if (range1 > range2) {
        
                let tempRange1 = range1;
                range1 = range2;
                range2 = tempRange1;
            } 
        }

    } else {
        return "ERROR";
    }
    
    let sum = 0;

    for (let i = range1; i <= range2; i++){
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
