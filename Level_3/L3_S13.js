//Creating filters
//How to construct filters by constructing arrays using loops

//we are going to push values into an empty array using loops
let arr = [];

for(let i = 0; i < 10; i++){
    arr.push(i);
}

console.log(arr);



//Example 2

let numbs = [1, 5, 3, 67, 8, 9, 0, 32];

//let say we want to push the numbers bigger than 5 to the empty array below;
let emptyArr = [];

for(let i = 0; i < numbs.length; i++){
    if(numbs[i] > 5){
     emptyArr.push(numbs[i]);
    }  
}

console.log(emptyArr);