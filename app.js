
// function fizzBuzz(n) {
//     // Write your code here
//     for(let i = 1; i < n; i++){
// console.log(i)
// if(n % 3 === 0 & n % 5 === 0){
//      n = "FizzBuzz";
//  }
//  if(n % 3 === 0){
//      n = "Fizz";
//  }
//  if(n % 5 === 0){
//      n = "Buzz";
//  }  
 
//   console.log(n)
//    return n;  
//     }
     


// fizzBuzz(15);

// let bigArr = [[1, 2, 3], [4, 5, 6], [7, 7, 7]];

// for(let i = 0; i < bigArr.length; i++){
//     // console.log(bigArr[i])
//     for(let j = 0; j < bigArr[i].length; j++){
//         console.log(bigArr[j])
//     }
// }



// Please complete these steps before moving forward:

// Follow the previous video to build a function that pushes the elements of the array but multiplied by 5 into an output array, then make the function return that output array, and store the result in a variable to then show them with console.log.


// function reverse(arr){
//     let output = [];
//     for(let i = arr.length - 1; i >= 0; i--){
//         if(arr[i] === 1){
//             output.push("One")
//         }
//         if(arr[i] === 2){
//             output.push("Two")
//         }
//         if(arr[i] === 3){
//             output.push("Three")
//         }
//         if(arr[i] === 4){
//             output.push("Four")
//         }
//     }
//     return output;
// }


// let result = reverse([1, 2, 1, 2]);

// console.log(result)


// function sumAll(arr){
//     let start = arr[0]
//     let end = arr[1]
    
//     let sum = 0;
//     for(let j = start; j <= end; j++){
//         sum += j;
//     }
//     return sum;
//   }



//   let rebt = sumAll([1, 4]);
//   console.log(rebt)


/*
//REVERSING IT will be

function sumAll(arr){
    let start = arr[0]
    let end = arr[1]

    if(end < start){
        start = arr[1]
        end = arr[0] 
    }
    
    let sum = 0;
    for(let j = start; j <= end; j++){
        sum += j;
    }
    return sum;
  }



  let rebt = sumAll([7, 4]);
  console.log(rebt)

*/


// function convertToF(celsius){
//     let fahrenheit;
//     fahrenheit = celsius * 9/5 + 32;

//     return fahrenheit
// }

// let result = convertToF(20)
// console.log(result);


/*
function findLongestWordLength(str) {
    let longestWord = ""
    let words = str.split(" ")
   

    for(let i = 0; i < words.length; i++){
        console.log(words[i])

    }

    return longestWord.length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
*/


/*
function factorialize(num){
    let output = 1;
    for(let i = 2; i <= num; i++){
        output *= i;
    }
    return output;
}


let result = factorialize(5);
console.log(result)
*/


/*
function truncateString(str, num){
    let output = str.substring(0, num);
    if(output.length < str.length){
        output += "..."
    }
return output;
}
  

let result = truncateString("This is my best coding challenge", 8);
console.log(result)
*/

// function getIndexToIns(arr, num){
//     let belong = 0;
//    for(let i = 0; i < arr.length; i++){
//     //sort function cannot work for this program
//     //count only the numbers smaller than 19
//     //in the belong variable.
//     if(arr[i] < num){
//         belong ++;
//     }
//    }
// console.log(belong);
// return belong;
// }

//  getIndexToIns([3, 10, 5], 4);





// function chunkArrayInGroups(arr, size){
//     let output = [];
//     let subArray = [];
//     let subCounter = 0;
  
//     for(let i = 0; i < arr.length; i++){
//       // Increase subCounter until we reach size
//       // Reset subCounter
//       if(subCounter === size){
//           subCounter = 0;
//           output.push(subArray);
//           subArray = []
//       }
//       subArray.push(arr[i]); //we will push to subarray
//       //console.log(subCounter, subArray);
//       subCounter++;
//     }
//     output.push(subArray)
//     //console.log(output);
    
//     return output;
//   }
  
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6,], 3));
// //two dimensional array
// let bigArr = [[1, 2, 3], [4, 5, 6], [7, 7, 7]];

// //console.log(bigArr[1]);
// //result [2, 3, 4]

// //console.log(bigArr[1][2]);
// //result 4

// for(let i = 0; i < bigArr.length; i++){
//     //console.log(bigArr[i])
//     for(let j = 0; j < bigArr[i].length; j++){
//         console.log(bigArr[i][j]);
//     }
// }

// let lb = document.getElementById("myLabel");

// function groupSets(arr, size){
//     let output = [];
//     let subArray = [];
//     let subCounter = 0;
    

//     for(let i = 0; i < arr.length; i++){
//         if(subCounter === size){
//             subCounter = 0;
//             output.push(subArray);
//             subArray = [];
//         }
//         subArray.push(arr[i])
       
        
//         subCounter ++;
//     }
// output.push(subArray);



//     return output;
// }







// let result = (groupSets(["Hauwa ",  "Afra ", "Yusha ", "Suleiman ", "Tariq ", "Ahmed ", "Haneef ", "Musa ", "Amir ", "Fatima ", "Ummi"], 3));

// let login = "Musa";

// lb.innerHTML = result

// console.log(result)


/*

let arr = ['Daula', "Muhammad", "Hauwa Muhammad", "Afra", "zubairu"];
login = "d";

if(arr.includes(window.prompt())){
    console.log("Access Granted")
}else{
    console.log("Access Denied")
}
*/


// function sumAll(arr) {
//     let start = arr[0];
//     let end = arr[1];
//     let output = 0;
//   if(end < start){
//     end = arr[0];
//     start = arr[1]
//   }
    
//     for(let i = start; i <= end; i++){
//     output += i;
//     }
//     return output;
//   }
  
//   console.log(sumAll([5, 10]));

// function sumAll(arr) {
//     let start = arr[0];
//     let mid = arr[1];
//     let end = arr[2];
//     let output = 0;
//   if(end < start){
//     end = arr[0];
//     start = arr[2]
//   }
    
//     for(let i = start; i <= end; i++){
//         console.log(i)
//     output += i;
//     }
//     return output;
//   }
  
//   console.log(sumAll([7, 10, 16]));

//   //Result : 45




// 8.	Seek and Destroy 

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy/


// Feature of function arguments in javascript

// function destroyer(arr){

//     let input = arguments[0];
//     let output = [];
//     let destroy = [];// our 2nd set of argument
// for(let i = 1; i < arguments.length; i++){
//     destroy.push(arguments[i])
// }
  
// // console.log(destroy);
// //loop through input and delete the numbers includes in destroy array
// for(let i = 0; i < input.length; i++){
//     console.log(input[i], destroy)
//     if(destroy.includes(input[i]) === false){
//         output.push[input[i]]
//     }
// }

//     return arr;
// }




// console.log(destroyer([1, 2, 3, 1, 2, 3], 1, 1, 5))

/*

function destroyer(arr){
    //1st
    let input = arguments[0]
    //2nd
    let output = []; // we are only going to keep the numbers input that is not in arguments[1],
    //3rd
    let destroy = []; //which will comprise our argument[1]
    //4th
    for(let i = 1; i < arguments.length; i++){
        // console.log(arguments[i])
        destroy.push(arguments[i])
        
    }
    // console.log(destroyer);
    //Loop through input and delete the numbers included in destroy array
    for(let j = 1; j < input.length; j++){
        console.log(`is ${input[j]} included in  ${destroy}  ?`)
        if(destroy.includes(input[j]) === false){
   //we keep it
         output.push(input[j]);
         console.log(`No Keep it`)

     }else {
        console.log(`Yes Delete it.`)
     }
     
    }


    return arr
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//what is found in both 'A' and 'B' will be removed in A.

*/


// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// Tests
// destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// destroyer([2, 3, 2, 3], 2, 3) should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].


// 10.	DNA Pairing

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing/


// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// Tests
// Waiting:pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// Waiting:pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// Waiting:pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

function pairElement(str) {
    let output = [];
    for(let i = 0; i < str.length; i++){
    if(str[i] === "A"){
      output.push(["A", "T"]);
    }
    if(str[i] === "T"){
      output.push(["T", "A"]);
    }
    if(str[i] === "C"){
      output.push(["C", "G"]);
    }
    if(str[i] === "G"){
      output.push(["G", "C"]);
    }
    }
    
    return output;
  }
  
    let result = pairElement("ATCGA");
  console.log(result)