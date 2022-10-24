//Combing arrays, loops and if-then-else

//Let create a program that detects all numbers smaller than '7'

let arr = [1, 5, 34, 2, 7, 9, 0, 32, 2,
    1, 5, 34, 2, 7, 9, 0, 32,1, 5, 34, 2, 7, 9, 0, 32, 1, 5, 34, 2, 7, 9, 0, 32, 1, 5, 34, 2, 7, 9, 0, 32,1, 5, 34, 2, 7, 9, 0, 32,];

let len = arr.length;

for(let i = 0; i < len; i++){
    if(arr[i] < 7){

        console.log(arr[i])
    }
}