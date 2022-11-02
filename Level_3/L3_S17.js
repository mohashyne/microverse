// Constructing arrays with sub arrays
// How to build arrays with subarrays using nested loops


//two dimensional array
// we are going to use the nested loop method for this , but instead of console .log , we are going to push values into an empty array to create a nested array.

//1st let create and empty bigarr
let bigArr = [];

let exterCtr = 1;//if you want a counter that preserves it value Outside of the loop, you have to declare variable outside like this.

//NOTE! IF YOU WANT TO CREATE AN ARRAY WITH SUB ARRAYS, YOU HAVE TO USE A BIG LOOP FOR THE BIG ARRAY AND LITTLE LOOP FOR THE LITTLE ARRAY. AND AGAIN YOU NEED TO BEGIN BY CREATING AND EMPTY  SUB-ARRAY AND A LITTLE ARRAY.


  //2nd we make a loop to create 3 arrays
// inside the bigarr
for(let i = 0; i < 3; i++){
  
        //3rd
// console.log(i); or console.log([]); to replace i
// with []

      /* //4th
//but instead we want to push i or [] into bigArr,
//  NOT console.log , this is for testing to see if our code is working
 bigArr.push([]); //this will give us structure with NO values. */

// 7th, we need to declare a variable for our little array.
let littleArr = [];// this means on any step of the bigArr, we are going to create a small array, and its going to be an empty array

//  6th , we will use a loop to push values into the little arrays //created in 4th location.
for(let j = 0; j < 3; j++){
    //8th, we will now push the value of 'J' to each little array in the bigArr, which will contain 3 similar values each.
    /*
    littleArr.push(j); //instead of 'j' we will push 'exterCtr'
    */
    littleArr.push(exterCtr);
    //And finally increment it 
    exterCtr++;
}

//LASTLY , we push the littleArr to the bigarr
bigArr.push(littleArr);

//result will be:
// [0, 1, 2], [0, 1, 2], [0, 1, 2]
//but this is NOT want we want, we want 1-9
//therefore we need to create any external variable as a counter, outside our function.



}



//we need a memory outside the loop that counts from 1-9 , that will be pushed the the values of the big arr

// 5th (use this to always check your result)
console.log(bigArr)
// result  with 3 nested arrays
// [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]












/*
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
// result [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] */





