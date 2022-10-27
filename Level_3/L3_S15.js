//Accessing arrays with subArrays
//how to access subArrays inside arrays with nested loops.

//two dimensional array
let bigArr = [[1, 2, 3], [4, 5, 6], [7, 7, 7]];

//console.log(bigArr[1]);
//result [2, 3, 4]

//console.log(bigArr[1][2]);
//result 4

for(let i = 0; i < bigArr.length; i++){
    //console.log(bigArr[i])
    for(let j = 0; j < bigArr[i].length; j++){
        console.log(bigArr[i][j]);
    }
}
