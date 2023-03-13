const convertToCelsius = function(temp) {

        celcius = (temp - 32) * .5556;

        return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function(temp) {

        fahrenheit = temp * 1.8 + 32; 

        return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
