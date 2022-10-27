// Please complete these steps before moving forward:

// Use the example from the video, but this time, try to generate the pattern [ [9, 8, 7], [6, 5, 4], [3, 2, 1] ]

// HINT: You can use the code from the video, but looping in reverse order.


let bigArr = [];


let extctr = 9;
for(let i = 0; i < 3; i++){
    // bigArr.push([]);
    let littleArr = [];
    for(let j = 0; j < 3; j++){
     littleArr.push(extctr);
     extctr--;
    }
    bigArr.push(littleArr);
} 

console.log(bigArr);