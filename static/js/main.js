var addToChat = function() {
    let input = document.getElementById("userInput").value;
    //console.log(input);
    let chat = document.getElementById("chat");
    chat.innerHTML += "<div class=\"ui-body ui-body-b ui-corner-all\"><p>Friend:</p><p>" + input + "</p><div>";
    chat.innerHTML += "<p></p>";
}

var i = false;
var a = false;
var f = false;

var addFollowing = function(el) {
    let folField = document.getElementById("following");
    if (f == false) {
        folField.innerHTML = "Following: 72";
        el.innerHTML = "Unfollow";
        f = true;
    } else {
        folField.innerHTML = "Following: 71";
        el.innerHTML = "Follow";
        f = false;
    }
}


var addInterested = function(el) {
    let intField = document.getElementById("interested");
    if (i == false) {
        intField.innerHTML = "Interested: 16";
        el.innerHTML = "Not Interested";
        i = true;
    } else {
        intField.innerHTML = "Interested: 15";
        el.innerHTML = "Interested";
        i = false;
    }
}


var addAttending = function(el) {
    let attField = document.getElementById("attending");
    if (a == false) {
        attField.innerHTML = "Attending: 3/4";
        el.innerHTML = "Not Attending";
        a = true;
    } else {
        attField.innerHTML = "Attending: 2/4";
        el.innerHTML = "Attending";
        a = false;
    }
}