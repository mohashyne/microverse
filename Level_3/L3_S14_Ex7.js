// Please complete these steps before moving forward:

// Create an array with the numbers from 1 to 10.
// Create a filter that pushes the numbers from 4 to 9 to a new array.


//SOLUTION

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumbs = [];

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 3 && arr[i] <= 9){
        newNumbs.push(arr[i]);
    }
}

console.log(newNumbs);
// result [4, 5, 6, 7, 8, 9];