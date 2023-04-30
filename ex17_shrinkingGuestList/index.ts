let guestList = ["Sadia","Fatima","Aqsa","Hunaina","Maaza","Fizza","Ayesha","Husna"];

//part 2 add guest at the start of list
guestList.unshift("Mahnoor");

//part 3 add guest at the end of list
guestList.push("Hanzala"); 

//part 4 add guest in the middle of list
guestList.splice(3,0,"Jia");

console.log("I can invite only two people\n")

for(var i=10;2<guestList.length;i--){
    console.log(`Sorry ${guestList[i]} you are not invited`);
    guestList.pop();
}
console.log();
for(var i=1;i>=0;i--){
    console.log(`${guestList[i]} you are invited`);
    guestList.pop();
};
console.log(`\nEmpty list: ${guestList}`);