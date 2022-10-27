// Please complete these steps before moving forward:

// Create the array arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
// Create a nested loop that displays each value in the subarrays, but in reverse order, such that it shows: 9, 8, 7, 6, 5, 4, 3, 2, 1

// HINT: You will have to reverse the big loop, as well as the little loop.


// SOLUTION

let arr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

for(let i = arr.length - 1; i >= 0; i--){
    for(let j = arr[i].length -1; j >= 0 ; j--){
        console.log(arr[i][j]);
    }
}