// 9.	Pig Latin

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin/

// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.



// Tests
// Waiting:translatePigLatin("california") should return the string aliforniacay.
// Waiting:translatePigLatin("paragraphs") should return the string aragraphspay.
// Waiting:translatePigLatin("glove") should return the string oveglay.
// Waiting:translatePigLatin("algorithm") should return the string algorithmway.
// Waiting:translatePigLatin("eight") should return the string eightway.
// Waiting:Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
// Waiting:Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.

//SOLUTION

// CONSONANT CLUSTER MEANS 2 OR MORE CONSONANT SITTING NEXT TO EACH OTHER

// ALWAYS WORK WITH THE MOST EASIEST OUTPUT FIRST
// THEN GROW OUR CODE TO COVER THE REST OF THE CASE
// THIS IS A STANDARD PROCEDURE IN PROGRAMMING


function translatePigLatin(str) {
    let  firstLetter = str[0];
    let vowels = "aeiou"
    // Check if vowels includes our first letter
    if(vowels.includes(firstLetter) === true){
        return str + "way";
    }
    //We are going to use a while loop to grab a consonant cluster
    let i = 0; // our counter
    let clusterCst = "";
    while(vowels.includes(str[i]) === false && i < str.length){
        clusterCst += str[i]
        i++;

    }
    
    //console.log(i) //to see the index of i.

    return str.substring(i) + clusterCst + "ay";
  }
  


  let result = translatePigLatin("rhythm");
  console.log(result);