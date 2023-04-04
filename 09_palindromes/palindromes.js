const palindromes = function (word) {
   let letters = word.split("");
   let noSpace = "";
   let reversedArray = [];

        for(let letter of letters){
            switch(letter){
                case " ":
                    break;
                case "!":
                    break;
                case ",":
                    break;
                case ".":
                    break;      
                default:
                    noSpace += letter;
                    reversedArray.push(letter);
            }
        }
    let reversed = "";
        for( let letter of reversedArray.reverse()){
            reversed += letter;
        }
    
   if(noSpace.toLowerCase() === reversed.toLowerCase()){
       return true;
   } else{
      return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
