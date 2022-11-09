// 8.	Seek and Destroy 

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy/


// Feature of function arguments in javascript

function destroyer(arr){
    //argument object(it a built in)
    //console.log(arguments[0]);//use index number to view the values in the function;
    let output = 0
    //now let use create a variable to access the arr
    let input = arguments[0];
    console.log(input);
    
    /*
    //the rest
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
    console.log(arguments[4]);
    console.log(arguments[5]); */
    
    //Shorthand 
    for(let i = 1; i < arguments.length; i++){
        console.log(arguments[i])
        output = arguments[i]
        
    }
   

        return arr;
    }
    
    
    
    //we are actually going to the first one which is the 'arr', and the rest is going to be of optional length(meaning we could have 2 or more arguments outside the array), the questions is how do we handle a variable amount of argument.
    //The answer is we are going to use a special built-in variable of javascript that is called "arguments object"
    destroyer([1, 2, 3, 1, 2, 3], 2, 3, 5, 7, 6);
    
    // the challenge means you need to delete all the numbers present in your arr , that is already in the other argument 
    