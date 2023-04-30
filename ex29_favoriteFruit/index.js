var fruits = ["Mangoes", "Apples", "Bananas"];
var test = "Grapes";
if (fruits.indexOf(test) !== -1) {
    console.log("You really like ".concat(test));
}
else {
    console.log("".concat(test, " are not exist in list"));
}
