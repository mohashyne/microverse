// 10.	DNA Pairing

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing/


// DNA Pairing
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// Tests
// Waiting:pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// Waiting:pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// Waiting:pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

function pairElement(str) {
    let output = [];
    for(let i = 0; i < str.length; i++){
    if(str[i] === "A"){
      output.push(["A", "T"]);
    }
    if(str[i] === "T"){
      output.push(["T", "A"]);
    }
    if(str[i] === "C"){
      output.push(["C", "G"]);
    }
    if(str[i] === "G"){
      output.push(["G", "C"]);
    }
    }
    
    return output;
  }
  
    let result = pairElement("ATCGA");
  console.log(result)