// Please complete these steps before moving forward:

// Create an array with the following values: 
// [3, 10, 9, 5, 2, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8]
// Create a loop that loops through every value of the array.
// Inside the loop, create an if-else statement that only `console.logs` the value or `arr[i]` if it belongs to the range between 3 and 7,
// In the end, the console should only show the numbers: 3, 5, 7, 4, 6

// Hint: watch the video on “Logical operators” to find out how to create an `if` statement that activates only within a certain range of numbers.

// Practice with the following challenges:

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-and-operator

//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparisons-with-the-logical-or-operator

let arr = [3, 10, 9, 5, 2, 11, 7, 15, 13, 4 , 1, 13, 6, 14, 8];




for(let i = 0; i < arr.length; i++){
    if(arr[i]  > 2 && arr[i] <= 7){

        console.log(arr[i]);
    }

}