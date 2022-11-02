// Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

// Tests
// Waiting:convertCtoF(0) should return a number
// Waiting:convertCtoF(-30) should return a value of -22
// Waiting:convertCtoF(-10) should return a value of 14
// Waiting:convertCtoF(0) should return a value of 32
// Waiting:convertCtoF(20) should return a value of 68
// Waiting:convertCtoF(30) should return a value of 86




function convertToF(celsius){
    let fahrenheit;
    fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;
}

let result = convertToF(0);
console.log(result);