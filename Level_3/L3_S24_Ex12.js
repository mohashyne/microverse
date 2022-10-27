// Please complete these steps before moving forward:

// Create the array arr = [1, 2, 3, 4];
// Then, create a function that reverses and translates the array, such that it returns the output [“four”, “three”, “two”, “one”];
// Change the input of the function to arr = [4, 1, 1, 2] and verify that the result is [“two”, “one”, “one”, “four”].
// Now change the input to [1, 2, 1, 2] and verify that the output is [“two”, “one”, “two”, “one”]



// SOLUTION

function reverseBinary(arr){
    let output = [];
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === 1){
            output.push("one");
        }
        if(arr[i] === 2){
            output.push("two");
        }
        if(arr[i] === 3){
            output.push("three");
        }
        if(arr[i] === 4){
            output.push("four");
        }
    }
    return output;
}

let result = reverseBinary([1, 2, 3, 4]);
console.log(result);

let result2 = reverseBinary([1, 2, 1, 2]);
console.log(result2);