// Set the passcode in localStorage
localStorage.setItem("Passcode", 119);

// Retrieve the passcode from localStorage
var passcode = parseInt(localStorage.getItem("Passcode")); // Remember to convert to integer

// Prompt the user for input
var guess = prompt("");

// Check if the guess matches the passcode
if (parseInt(guess) === passcode) { // Convert guess to integer for comparison
    alert("yay");
} else {
    alert("");
}
