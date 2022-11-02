// 6.	Chunky monkey
// 6.	Chunky monkey

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey/

// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Tests
// chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

function chunkArrayInGroups(arr, size){
    let output = [];
    let subArray = [];
    let subCounter = 0;
  
    for(let i = 0; i < arr.length; i++){
      // Increase subCounter until we reach size
      // Reset subCounter
      if(subCounter === size){
          subCounter = 0;
          output.push(subArray);
          subArray = []
      }
      subArray.push(arr[i]); //we will push to subarray
      console.log(subCounter, subArray);
      subCounter++;
    }
    output.push(subArray)
    console.log(output);
    
    return output;
  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6,], 3);
  