//Array operation push, pop, shift, unshift, splice



let arr;

arr = ["apples", "oranges", "banana", 77, 95, 101];
console.log(arr);

/*
//push (it will add "grape to the end of the array")
arr.push("grape");
console.log(arr);
//result ["apples", "oranges", "banana", 77, 95, 101, grape];
*/


/*
//push (it will remove the last element of the array")
arr.pop();
console.log(arr);
//result ["apples", "oranges", "banana", 77, 95, 101];
*/

/*
// to store the value popped 
let popped = arr.pop()
console.log(popped);
*/


/*
//shift (removes the first element of an array)
let shifted = arr.shift();
console.log(shifted);
*/


/*
//Unshift (it will add an element to the beginning of the array")
arr.unshift(25);
console.log(arr);
*/

//splice (choose any place of the array and delete on of its element)

arr.splice(2, 1); // start from index 2 and remove 1 element
console.log(arr);

let spliced = arr.splice(2, 3) //arr.splice(2, 1); // start from index 2 and remove 3 elements.

console.log(spliced);



