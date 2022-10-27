// Constructing arrays with sub arrays
// How to build arrays with subarrays using nested loops



//two dimensional array
let bigArr = [];


let exterctr = 1;
for(let i = 0; i < 3; i++){
    // bigArr.push([]);
    let littleArr = [];
    for(let j = 0; j < 3; j++){
     littleArr.push(exterctr);
     exterctr++;
    }
    bigArr.push(littleArr);
} 

//we need a memory outside the loop that counts from 1-9 , that will be pushed the the values of the big arr

console.log(bigArr)
// result [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]





