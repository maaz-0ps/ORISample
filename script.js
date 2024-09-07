document.getElementById("greetButton").addEventListener("click", function() {
    var name = document.getElementById("nameInput").value;
    var greetingElement = document.getElementById("greeting");

    if (name.trim() === "") {
        greetingElement.textContent = "Please enter your name.";
    } else {
        greetingElement.textContent = "Hello, " + name +  "Welcome to ORI!";
    }
});
