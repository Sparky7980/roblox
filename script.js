function openGame() {
    var iframe = document.getElementById("game-iframe");

    // Toggle visibility of elements
    iframe.style.display = "block";

    // Set the iframe source
    iframe.src = "https://you-are-too-slow.onrender.com/";
}
