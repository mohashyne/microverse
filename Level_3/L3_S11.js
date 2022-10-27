//How to find out if a value is present in an array with includes.


let users = ["hackerman", "zerocool", "mitnick", "muhammad"];
let login = "muhammad";
let login2 = "Hauwa"

//Example 2
console.log(users.includes(login));
//result true

if(users.includes(login2) === true){
console.log("welcome")
}else{
    console.log("Begone Hacker!!");
}
//result begone hacker

//numbers to find
let arr = [0, 9, 6, 3, 2];
let find = 7;

if(arr.includes(find) === true){
    console.log("It is includes");
}
else{
    console.log("Its just not there")
}



//EXAMPLE 2
for(let i = 0; i < users.length; i++){
    if(users[i].includes(login)){
        console.log(users[i],":Access Granted");
    }else{
        console.log(users[i],":Acccess Denied");
    }
}

//Result
// hackerman Acccess Denied
// zerocool Acccess Denied
// mitnick Acccess Denied
// muhammad user accepted