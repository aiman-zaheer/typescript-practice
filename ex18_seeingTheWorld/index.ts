let fav_places:String[];
fav_places = ["Banana Reef","Santorini","Lucerna","Costa Rica","Pantara"];
//Print your array in its original order.
console.log(`Original List : ${fav_places}`);

//Print your array in alphabetical order without modifying the actual list.
let fav_places2:String[] = [];

for(var i=0;i<fav_places.length;i++){
    fav_places2.push(fav_places[i]);
}

fav_places2.sort();
console.log("Ordered List: "+fav_places2);

//Show that your array is still in its original order by printing it
console.log(`Original List : ${fav_places}`);

//Print your array in reverse alphabetical order without changing the order of the original list.
let fav_reverse:String[] = fav_places2.reverse();
console.log(`Reverse Order : ${fav_reverse}`);

//Show that your array is still in its original order by printing it again.
console.log(`Original List : ${fav_places}`);

//Reverse the order of your list. Print the array to show that its order has changed.
console.log(`Again reverse: ${fav_reverse.reverse()}`);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(`back to its original order: ${fav_reverse.reverse()}`);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(`alphabetical order : ${fav_reverse.sort()}`);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(`Reverse alphabetical order : ${fav_places.sort().reverse()}`);













