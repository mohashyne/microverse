// Please complete these steps before moving forward:

// Follow the previous video to build a function that pushes the elements of the array but multiplied by 5 into an output array, then make the function return that output array, and store the result in a variable to then show them with console.log.
// Please complete these steps before moving forward:





function multiply(mxArr){
    let output = [];
    for(let i = 0; i < mxArr.length; i++){
        output.push(mxArr[i] * 5);
    }
    return output;
}

let arrResult = multiply([5, 15, 22, 7, 99]);
console.log(arrResult);
