// 5.	Where do I belong?

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong/


// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Tests
// Waiting:getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
// Waiting:getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
// Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.

// Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
// Waiting:getIndexToIns([40, 60], 50) should return 1.
// Waiting:getIndexToIns([40, 60], 50) should return a number.
// Waiting:getIndexToIns([3, 10, 5], 3) should return 0.
// Waiting:getIndexToIns([3, 10, 5], 3) should return a number.
// Waiting:getIndexToIns([5, 3, 20, 3], 5) should return 2.
// Waiting:getIndexToIns([5, 3, 20, 3], 5) should return a number.
// Waiting:getIndexToIns([2, 20, 10], 19) should return 2.
// Waiting:getIndexToIns([2, 20, 10], 19) should return a number.
// Waiting:getIndexToIns([2, 5, 10], 15) should return 3.
// Waiting:getIndexToIns([2, 5, 10], 15) should return a number.
// Waiting:getIndexToIns([], 1) should return 0.
// Waiting:getIndexToIns([], 1) should return a number.


//SOLUTION
function getIndexToIns(arr, num){
    let belong = 0;
   for(let i = 0; i < arr.length; i++){
    //sort function cannot work for this program
    //count only the numbers smaller than 19
    //in the belong variable.
    if(arr[i] < num){
        belong ++; //this will add to the position of the index. But if u use belong += num, it will add the number that is supposed to be done.
    }
   }
console.log(belong);
return belong;
}

let result = getIndexToIns([3, 10, 5], 3);

