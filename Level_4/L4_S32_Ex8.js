// 8.	Seek and Destroy 

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy/


// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// Tests
// Waiting:destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
// Waiting:destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
// Waiting:destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
// Waiting:destroyer([2, 3, 2, 3], 2, 3) should return [].
// Waiting:destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
// Waiting:destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].


/*

function destroyer(arr){
    //1st
    let input = arguments[0]
    //2nd
    let output = []; // we are only going to keep the numbers input that is not in arguments[1],
    //3rd
    let destroy = []; //which will comprise our argument[1]
    //4th
    for(let i = 1; i < arguments.length; i++){
        // console.log(arguments[i])
        destroy.push(arguments[i])
        
    }
    // console.log(destroyer);
    //Loop through input and delete the numbers included in destroy array
    for(let j = 1; j < input.length; j++){
        console.log(`is ${input[j]} included in  ${destroy}  ?`)
        if(destroy.includes(input[j]) === false){
   //we keep it
         output.push(input[j]);
         console.log(`No Keep it`)

     }else {
        console.log(`Yes Delete it.`)
     }
     
    }


    return arr
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//what is found in both 'A' and 'B' will be removed in A.
*/



//SOLUTION

function destroyer(arr) {
    let input = arguments[0]
    let output = []; //result storage
    let destroy = [] //argument[1] storage
    for(let i = 1; i < arguments.length; i++){
        destroy.push(arguments[i])
       
    }
   // console.log(destroy)

   //Loop through input and delete the numbers included in destroy array
for(let i = 0; i < input.length; i++){
  if(destroy.includes(input[i]) === false){
    output.push(input[i]);
  }
}


    return output;
}

        //arg[0]      |      //arg[1]
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//any number available in 'A' and found in 'B' has to go.