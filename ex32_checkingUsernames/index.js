var current_users = ["Ali", "Aiman", "Fatima", "Haya", "Hira"];
var new_users = ["Sadia", "Fatima", "Aqsa", "AIMAN", "Ali"];
for (var i = 0; i < current_users.length; i++) {
    if (current_users.indexOf(new_users[i]) !== -1 || current_users.indexOf(new_users[i].toLowerCase()) !== -1 || current_users.indexOf(new_users[i].toUpperCase()) !== -1) {
        console.log("".concat(new_users[i], " will need to enter a new username."));
    }
    else {
        console.log("Saying that the username is available");
    }
}
