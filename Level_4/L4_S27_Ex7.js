// 7.	Sum All Numbers in a Range

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range/


function sumAll(arr) {
    let start = arr[0];
    let end = arr[1];
    let output = 0;
  if(end < start){
    end = arr[0];
    start = arr[1]
  }
    
    for(let i = start; i <= end; i++){
    output += i;
    }
    return output;
  }
  
  console.log(sumAll([10, 5]));

  //Result : 45
