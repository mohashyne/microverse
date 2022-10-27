// Reversing and translating arrays in functions

function reverse(arr){
    let output = [];
    for(let i = arr.length - 1; i >= 0; i--){
       output.push(arr[i])
    }
    return output;
   }
   
   
   let result = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9])
   console.log(result);




   function binary(bArr){
    let output2 = [];
    for(let j = 0; j < bArr.length; j++){
        if(bArr[j] === 1){
            output2.push("one");
        }
        if(bArr[j] === 0){
            output2.push("zero");
        }
    }
    
    return output2;
   }
   
   
   let result2 = binary([0, 1, 1, 0, 1, 0])
   console.log(result2);