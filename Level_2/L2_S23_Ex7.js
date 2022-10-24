//Exercise 7

//Create an array with the numbers from 1 to 10.
// Create a `for` loop that iterates through the array.
// Inside the same loop, add an `if` condition to only show the elements bigger than 4. Test it to see that it works.
//Remove the `if` condition so that all the elements show.


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = arr.length;

for(let i = 0; i < len; i++){
    if(arr[i] > 4){

        console.log(arr[i]);
    }
}