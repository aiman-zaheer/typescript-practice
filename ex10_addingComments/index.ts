//this program print my favorite number
let fav_num:Number = 2;

console.log(`My favorite number is ${fav_num}`);

//this program removes whitespaces from string and print it
let name1:String = "      \t\n\nAiman       \nZaheer      "+"   \n\t\nHello  ";

console.log(`\n\tOriginal Text: ${name1}\n`)
console.log(`\tAfter removing whitespaces:\n${name1.replace(/\s+/g,' ').trim()}`);