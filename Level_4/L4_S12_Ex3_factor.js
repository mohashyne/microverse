// Factorialize a Number
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.




// Tests
// Waiting:factorialize(5) should return a number.
// Waiting:factorialize(5) should return 120.
// Waiting:factorialize(10) should return 3628800.
// Waiting:factorialize(20) should return 2432902008176640000.
// Waiting:factorialize(0) should return 1.

// Example
function fractorializeExmp(numExmp){
    let outputExmp = 1;
    outputExmp *= 2;
    outputExmp *= 3;
    outputExmp *= 4;
    outputExmp *= 5;
    
    return outputExmp;
}

let resultExmp = fractorializeExmp(5);
console.log(resultExmp, 'This is a Hint on how to solve the challenge');


// SOLUTION
function fractionalize(num){
    let output = 1;
    for(let i = 2; i <= num; i++){
        //console.log("times", i);
        output *= i;

    }
    
    return output;
}

let result = fractionalize(10);
console.log(result);


