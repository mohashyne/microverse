//Why if-then-else statements matter

//'if' 'else' statements Do NOT follow instructions step-by-step
//from beginning to end like below, 
let myApples = 5;
    myApples += 15; 
    console.log("I have", myApples, "apples")
    //result "I have 15 apples"







console.log("-------------------------------------------------");
console.log("Example 2 (if , else)");


// Here is how 'if' 'else' statement work,
//its a conditional instruction to do a certain task if a condition is met

let myOranges = 5; //you can change the number '5' to '0' , to confirm the function.

if(myOranges === 0){
    myOranges += 5;
    console.log("Here you go, now you have", myOranges, "oranges");
}
else{
 myOranges =0;
 console.log("Thank you, now you have", myOranges, "oranges");
}

//result 'Thank you, now you have 0 oranges'.
//the second condition should execute because it was met and true.