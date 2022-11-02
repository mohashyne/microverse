//Problem Breaking

//sum all Numbers in range  
//we will pass you an array of two numbers, return the sum of those two numbers plus the sum of all the numbers between them. the lowest will not always come first.


//for example , sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4(both inclusive) is 10

//A sumAll([1, 4]) should return a number
// B sumAll([1, 4]) should return 10
// B sumAll([4, 1]) should return 10
// B sumAll([5, 10]) should return 10
// B sumAll([10, 5]) should return 10

/* function sumAll(arr){
  let first = arr[0];
  let last = arr[1]; // even  though this wont work for the other case

  let output = 0; //this is our accumulator variable.
for(let i = first; i <= last; i++){
  //console.log(i) // you need test your code step be step.
  //after the test and it worked , we need an acumulator value above the loop
  output += i; // because of the steps of the loop , we get 1+2+3+4
}
  
  //return 1; // this will change to return output
  return output;
}

//sumAll([1, 4]) //we want the sum 1 + 2 + 3 + 4, the small number will not always come first, e.g it can be sumAll([4, 1]) and still give same answer

let result = sumAll([1, 4]);
console.log(result); */


function sumAllReverse(arr2){
    let last2 = arr2[0];
    let first2 = arr2[1]; // even  though this wont work for the other case
  
  if(first2 > last2){
    first2 = arr[1];
    last2 = arr[0];
  }
    
  
    let output2 = 0;
  for(let j = first2; j <= last2; j++){
    //console.log(j) // you need test your code step be step.
    //after the test and it worked , we need an acumulator value above the loop
    output2 += j; // because of the steps of the loop , we get 4+3+2+1
  }
    
    //return 1; // this will change to return output
    return output2;
  }
  
  //sumAllReverse([1, 4]) //we want the sum 4+3+2+1, the small number will not always come last2, e.g it can be sumAllReverse([4, 1]) and still give same answer
  
  let result2 = sumAllReverse([4, 1]);
  console.log(result2);