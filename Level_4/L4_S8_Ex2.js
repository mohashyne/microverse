//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string

// Reverse a String
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.


// Tests
// Waiting:reverseString("hello") should return a string.
// Waiting:reverseString("hello") should return the string olleh.
// Waiting:reverseString("Howdy") should return the string ydwoH.
// Waiting:reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.


//......................................................


/*
// WRONG SOLUTION1
function reverseString(str){
    let output = [];
    for(let i = str.length -1; i >= 0; i--){
        output.push(str[i]);
    }
    return output;
}

let result = reverseString(["h", "e", "l", "l", "o"]);
console.log(result);
*/

//......................................................

/*
// WRONG SOLUTION1
function reverseStringWr(strWrong){
    let wrongOutput = [];
    wrongOutput.push(strWrong[4])
    wrongOutput.push(strWrong[3])
    wrongOutput.push(strWrong[2])
    wrongOutput.push(strWrong[1])
    wrongOutput.push(strWrong[0])

    return wrongOutput;
}


let wrongResult = reverseStringWr("hello");
console.log(wrongResult); //REMEMBER WE don't WANT AN ARRAY , WE WANT A STRING.
*/




//......................................................

/*
// WRONG SOLUTION 2
function reverseString2(str2){
    let output2 = [];
    for(let j = str2.length -1; j >= 0; j--){
        output2.push(str2[j]);
    }
    return output2;
}



let result2 = reverseString2(["H", "o", "w", "d", "y"]);
console.log(result2);
*/



//......................................................

/*
//  CORRECT SOLUTIONS

function reverseString(str){
    let output = "";
    output += str[4];
    output += str[3];
    output += str[2];
    output += str[1];
    output += str[0];
 
    return output;
}
   

let result = reverseString("hello");
console.log(result); //REMEMBER WE don't WANT AN ARRAY , WE WANT A STRING.

//RESULT => "olleh"

*/



//......................................................


/*
// //SHORT-HAND
function reverseString2(str2){
    let output2 = "";
    for(let j = str2.length - 1; j >= 0; j--){
      //console.log(str2[j])
      output += str2[j]
    }
  return output2;
}

let result2 = reverseString2("howdy");
console.log(result2); //REMEMBER WE don't WANT AN ARRAY , WE WANT A STRING.



//RESULT => "ydwoh"
 */



//......................................................


//SOLUTION "Greetings from Earth"

function reverseGreetings(gret){
    let greet = "";
    for(let g = gret.length - 1; g >= 0; g--){
//    console.log(gret[g])
   output += gret[g]
    }
    return greet;
}

let outcome = reverseGreetings("Greetings from Earth");
console.log(outcome);

//RESULT => htraE morf sgniteerG.