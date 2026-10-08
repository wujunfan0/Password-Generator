function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-=";

    let allowedChars = "";
    letpassword = "";

    allowedChars += includeLowercase ? lowercaseChars : ""; //if thi is treu then concatonnate all
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSybols ? symbolChars : "";

    if(length <= 0){
        return '(password length must b at least 1)';

    }
    if(allowedChars.length ===0){
        return '(At least 1 set of character nees to be selected)';
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() *allowedChars.length);
        password += allowedChars[randomIndex];
    }


    return password; //this is empty bc we still dont know what password is

}

const passwordLength = 12; //Can be adjusted
const includeLowercase = true; // if these were all false then
const includeUppercase = true;
const includeNumbers = true; 
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols); // we have to pass in all of these arguments when we call the function at the top

console.log('Generated password: ${password}'); //when the reuturn string is empty it will show nothing bc we dont have password yet

//this is a random password generator in javascript