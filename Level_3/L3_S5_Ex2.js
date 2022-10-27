// Please complete these steps before moving forward:

// Create an empty array called `arr`
// Create a `for` loop that loops from 3 to 12.
// On every step of that loop, push the value of `i` into the array.
// At the end of the loop, `console.log` the value of `arr` after all those values have been pushed into it.
// The output should show an array with the values [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// Hint: watch the video on “Array operations” in a previous slide for a reminder on how to use push for arrays. If you get stuck at any point, try to ask google about it. If you can’t find the answer, ask for help from your peers, or the coordinator.

let arr = [];
let myArrays = document.getElementById("myLabel");



for(let i = 3; i < 13; i++){
    arr.push(i);
    myArrays.innerHTML = arr;
}
console.log(arr);