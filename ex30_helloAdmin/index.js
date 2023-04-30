var username = ["Admin", "Ali", "Ahmed"];
for (var index = 0; index < username.length; index++) {
    if (username[index] == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username[index], ", thank you for logging in again."));
    }
}
