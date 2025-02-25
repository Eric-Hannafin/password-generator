const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];
let passwordLength = 12;

let textArea1 = document.getElementById("password-text-area1");
let textArea2 = document.getElementById("password-text-area2");
let textArea3 = document.getElementById("password-text-area3");
let textArea4 = document.getElementById("password-text-area4");

document.getElementById("generate-password-button1").addEventListener("click", generateRandomPassword);
document.getElementById("generate-password-button2").addEventListener("click", generateRandomPassword);

function generateRandomPassword() {
    let password1 = "";
    let password2 = "";
    for (let i = 0; i < passwordLength; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }
    textArea1.textContent = password1;
    textArea2.textContent = password2;
}



