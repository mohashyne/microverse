//Tweaking loops to count howsoever we may wish

/*
for(let i = 0; i < 10; i += 3){
    console.log(i);
}

//result 0, 3, 6, 9
*/

/*

//Reverse
for(let j = 10; j > 0; j--){
    console.log(j);
}

//result 10, 9, 8, 7, 6, 5, 4, 3, 2, 1. */


//Multiply (multiplying k by the number declared)
//Reverse
for(let k = 1; k < 20; k *= 2){
    console.log(k);
    // i will be multiplied by 2 , until we reach 20.
}

//result 1, 2, 4, 8, 10.
//this means e.g once the loop 2 is multiplied by 2 the result is 4, so it will take 4 and multiply it with 2 = 8, instead of the traditional count of 1 x 2, 2 x 2, (3 x 2 will not count because k is already 4) so the loop will now take 4 * 2 = 8, 8 * 2 = 16, (16 x 2) will not execute because k = 32; which is invalid. 

// more of like power of 2 .
