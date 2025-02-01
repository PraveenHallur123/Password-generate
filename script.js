// Generate the password when the button is clicked
function generatePassword() {
    const length = document.getElementById("length").value;
    const upperCase = document.getElementById("upperCase").checked;
    const lowerCase = document.getElementById("lowerCase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=<>?/.,;:'\"[]{}|\\";
    
    let charset = "";
    if (upperCase) charset += upperChars;
    if (lowerCase) charset += lowerChars;
    if (numbers) charset += numberChars;
    if (symbols) charset += symbolChars;
    
    if (charset === "") {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    
    document.getElementById("password").value = password;
}

// Copy the generated password to clipboard
function copyPassword() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}
