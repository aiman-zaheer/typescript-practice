var guestList = ["Sadia", "Fatima", "Aqsa", "Hunaina", "Maaza"];
console.log("\n");
guestList.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", I am inviting you to my Birthday Party"));
});
//part 1
console.log("\n");
console.log("".concat(guestList[3], " can't make it to the Party"));
//part 2
guestList.splice(3, 1, "Haya"); //inviting new guest 
console.log("\n");
console.log(guestList);
//part 3
console.log("\n");
guestList.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", I am inviting you to my Birthday Party"));
});
