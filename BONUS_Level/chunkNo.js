let lb = document.getElementById("myLabel");

function groupSets(arr, size, students){
    let output = [];
    let subArray = [];
    let subCounter = 0;
    

    for(let i = 0; i < arr.length && students.length; i++){
        if(subCounter === size){
            subCounter = 0;
            output.push(subArray);
            subArray = [];
        }
        subArray.push(arr[i], students[i])
       
        
        subCounter ++;
    }
output.push(subArray);



    return output;
}








let result = (groupSets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, ["Hauwa ",  "Afra ", "Yusha ", "Suleiman ", "Tariq ", "Ahmed ", "Haneef ", "Musa ", "Amir ", "Fatima "]));

lb.innerHTML = result

console.log(result)