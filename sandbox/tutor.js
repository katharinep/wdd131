//breakpoint exercise//
const user = null; // We purposely set this to null to trigger the error

document.getElementById("getUserData").addEventListener("click", function() {
console.log(user.name); // This will throw an error because user is null
});

if (user !== null && user !== undefined) {
    console.log(user.name);
} else {
    console.log("User data is not available.");
}

//Add alert to an action//
//document.getElementById("myButton").addEventListener("click", function() {alert("Button was clicked!");
//});

//Button trick//
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").innerText = "You clicked the button!";
    let btn = document.getElementById("myButton");
    btn.innerText = "Special button";
    btn.style.backgroundColor = "purple";
    btn.style.color = "white";
    btn.style.borderRadius = "10px";
});
//add code to change button appearance//

//detect key pressed//
document.addEventListener("keydown", function(event) {
    alert("Key pressed: " + event.key);
})

//button hover//
document.getElementById("myButton").addEventListener("mouseover", function() {
    document.getElementById("myButton").style.backgroundColor = "yellow";
});

document.getElementById("myButton").addEventListener("mouseout", function() {
    document.getElementById("myButton").style.backgroundColor = "";
});