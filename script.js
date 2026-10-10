const lengthSlider = document.querySelector(".pass-length input"),options = document.querySelectorAll(".option input"),copyIcon = document.querySelector(".input-box span"),passwordInput = document.querySelector(".input-box input"),passIndicator = document.querySelector(".pass-indicator"),generateBtn = document.querySelector(".generate-btn");
const characters = { // object of letters numbers  symbols
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "^!$%&|[](){}:;.,*+-#@<>~"
}


const generatePassword = () => {
    let staticPassword = "",
        randomPassword = "",
        excludeDuplicate = false,
        passLength = lengthSlider.value;
        options.forEach(option => { // looping through each options checkbox
            if(option.checked) { // if checkbox is checked
            if(option.id !== "exc-duplicate" && option.id !== "spaces") {
                staticPassword += characters[option.id];
            } else if(option.id === "spaces") { // if checkbox id is spaces
                staticPassword += `  ${staticPassword}  `
            } else {
                excludeDuplicate = true;
            }
        }
    });


    for (let i = 0; i < passLength; i++) {
                                // getting random character
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)]
        if(excludeDuplicate) { // if this is true
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else { // adding random chararcter
            randomPassword += randomChar
        }
    }
    passwordInput.value = randomPassword
}

const upadatePassIndicator = () => {
    // setting slider values to show if weak or storng
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";
}
const updateSlider = () => {
    // puts slider value as text
    document.querySelector(".pass-length span").innerText = lengthSlider.value
    generatePassword();
    upadatePassIndicator();
}
updateSlider();
const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value); // lets me copy rnadom apssword  to clipboard
    copyIcon.innerText = "check"; // changes copy to ctcick
    copyIcon.style.color = "#4285F4"
    setTimeout(() => { // this changes tick after 1500ms
        copyIcon.innerText = "copy_all";
        copyIcon.style.color = "#707070";
    }, 1500);
}
copyIcon.addEventListener("click", copyPassword)
lengthSlider.addEventListener("input", updateSlider)
generateBtn.addEventListener("click", generatePassword)