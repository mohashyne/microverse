// Function argument => block of code you can call anytime.
//How function argument works


// function sum(){
//     let x = 5;
//     let y = 7;

//     console.log(x + y);
// }

// sum();



//Arguments = instead of having the values of x and y fixed, you can declare a parameter


function sum(x, y){

    console.log(x + y);
}

sum(5, 5);
sum(99, 44);

//Example 2

function juice(firstIngredient, secondIngredient){

    console.log("Here is your", firstIngredient, "with",secondIngredient, "juice");
}

juice("orange" , "mango");