var username = ["Admin", "Ali", "Ahmed"];
if(username.length == 0){
    console.log("We need to fin some users!");
}
else{
    console.log(username);
}
let a = username.length;
for (let index = 0; index < a; index++) {
    username.pop();
}
console.log(username);