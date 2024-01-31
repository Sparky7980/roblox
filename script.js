function checkPassword() {
    var passwordInput = document.getElementById("password-input").value;
    var errorMessage = document.getElementById("error-message");
    var loginContainer = document.getElementById("login-container");
    var logoContainer = document.getElementById("logo-container");
    var playButton = document.getElementById("play-button");

    if (passwordInput === "@53#1!") {
        // Correct password, hide login and show main content
        loginContainer.style.display = "none";
        logoContainer.style.display = "block";
        playButton.style.display = "block";
        return false; // Prevent form submission
    } else {
        // Incorrect password, show error message
        errorMessage.textContent = "Incorrect password. Please try again.";
        return false; // Prevent form submission
    }
}

function openGame() {
    var iframe = document.getElementById("game-iframe");
    var playButton = document.getElementById("play-button");

    // Toggle visibility of elements
    iframe.style.display = "block";
    playButton.style.display = "none"; 

    // Set the iframe source
    iframe.src = "https://you-are-too-slow.onrender.com/";
}
