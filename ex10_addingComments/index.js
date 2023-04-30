//this program print my favorite number
var fav_num = 2;
console.log("My favorite number is ".concat(fav_num));
//this program removes whitespaces from string and print it
var name1 = "      \t\n\nAiman       \nZaheer      " + "   \n\t\nHello  ";
console.log("\n\tOriginal Text: ".concat(name1, "\n"));
console.log("\tAfter removing whitespaces:\n".concat(name1.replace(/\s+/g, ' ').trim()));
