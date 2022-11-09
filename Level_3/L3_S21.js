//Using 'return' for function output
//How to return to produce the output of a function.

function sum(x, y){
    return x + y;
}


//sum(1, 4) // when you run this it will return nothing because we are not using it for anything, if we want to see our result , we need to manipulate it by declaring a variable and assign a function call to it.
let result = sum(1, 4)
console.log(result);


let result2 = sum(1, 4) * sum(7, 7)
console.log(result2);


//Example 2

// function sum(arr){
//     let output = []
//     for(let i = 0; i < arr.length; i++){
//         output.push(arr[i] + 1);
    
//     }
//     return output;
// }

// let arrResult = sum([1, 2, 3, 4]);

// console.log(arrResult);





function multiplr(bigArr){
    let outputy = []
    for(let i = 0; i < bigArr.length; i++){
        outputy.push(bigArr[i] * 2);

    }
    return outputy
}


let rst = multiplr([2, 4, 6, 8]);
let rst2 = multiplr([2, 100, 77, 87, 99, 11]);

console.log(rst)
console.log(rst2)


/*
function sum(x, y){
    return x + y;
    //return is a special keyword that allows us to output a value into a variable
    }
    
    
    //sum(1, 4); // this will not display anything, instead, we need to declare a variable with the function call as the value;
    
    let result4 = sum(1, 4) * sum(1, 9);
    console.log(result); */
    
    
    
    
    // Example 2
    // we want to take any array and add 1 to all of its element.
    function arrSum(arr){
        //1st lets declare an empty arr
        let output = [];
        for(let i = 0; i < arr.length; i++){
            output.push(arr[i] +1)
        }
        
    return output;
    }
    
    
    let outcome = arrSum([1, 2, 3, 4, 5]);
    let outcome2 = arrSum([0, 1, 0, 1, 0, 2]);
    console.log(outcome);
    console.log(outcome2);