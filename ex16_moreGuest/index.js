var guestList = ["Sadia", "Fatima", "Aqsa", "Hunaina", "Maaza", "Fizza", "Ayesha", "Husna"];
//part 1
console.log("People, just found a bigger table and more people will be joining us this evening");
console.log("\n");
//part 2 add guest at the start of list
guestList.unshift("Mahnoor");
//part 3 add guest at the end of list
guestList.push("Hanzala");
//part 4 add guest in the middle of list
guestList.splice(3, 0, "Jia");
//part 5
console.log("\n");
guestList.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", I am inviting you to my Birthday Party"));
});
