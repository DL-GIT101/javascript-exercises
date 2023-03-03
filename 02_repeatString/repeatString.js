const repeatString = function(word, times) {

    let repeatedWord = "";

    if (times < 0 ){
        return "ERROR";
    } else {
        for (let i = 1; i <= times; i++) { 
            repeatedWord += word;
        }
    
        return repeatedWord;
    }

    
};

// Do not edit below this line
module.exports = repeatString;
