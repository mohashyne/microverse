// Truncate a String

// Try to solve this coding challenge together with your team. Spend at most 20 minutes to solve it. After that, if you need help, watch the video hints in the next slides.

// Here’s the link to the coding challenge:

// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string/

// Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Tests
// Waiting:truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket....
// Waiting:truncateString("Peter Piper picked a peck of pickled peppers", 11) should return the string Peter Piper....
// Waiting:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return the string A-tisket a-tasket A green and yellow basket.
// Waiting:truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return the string A-tisket a-tasket A green and yellow basket.
// Waiting:truncateString("A-", 1) should return the string A....
// Waiting:truncateString("Absolutely Longer", 2) should return the string Ab....


function truncateString(str, num) {
    let output = str.substring(0, num);
    if(output.length < str.length){
        output += "...";
    }
    return output;
}


let result = truncateString("A-tisket a-tasket A green and yellow basket");

console.log(result);


