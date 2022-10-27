// Please complete these steps before moving forward:

// Create an array with the numbers from 1 to 10.
// Write an if statement that shows the text “Found it!” if it finds the number 13 in the array, and “Not found” if it does not find it.
// Add the number 13 to the array so that the if statement finds the value.

//SOLUTION
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13];
let uniqueNum = 13;

if(arr.includes(uniqueNum) === true){
    console.log("Found it!");
}else{
    console.log("Not found");
}