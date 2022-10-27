//Logical operators
// &&  and logical operator , || or

let num = 10;
let num2 = 14;

if(num > 5 && num < 12){
    console.log("its Greater than 5 and smaller than 12");
    
}

if(num2 === 6 || num2 === 9 || num2 === 14){
    console.log("its either 6, 9 or 14");

}


let range = 11;

if((range > 5 && range < 12) || (range > 15 && range < 17)){
    console.log("In range");
}