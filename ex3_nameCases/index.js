var name1 = "Aiman zaheer";
var toTitleCase = function (n) {
    var a = n.split(" ");
    var w = a.map(function (word) { return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(); });
    return w.join(' ');
};
console.log("lower case: ".concat(name1.toLowerCase()));
console.log("UPPER CASE: ".concat(name1.toUpperCase()));
console.log("Title Case: ".concat(toTitleCase(name1)));
