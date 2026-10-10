// undefined, null, boolean, string, symbol, number, and object

var myName = "Kevin"; //this is older and wont be used as often

myName = 8;

let ourName = "Richard"; //can only be used within the scope of this

const pi = 3.14; //variable that can never change

console.log(ourName) 

const minLength = 8;
let currentLength = 6;

function validatePasswordLength(length) {
    if (length >= minLength) {
        return "Success: Your password length is secure!";
  
    } else {
        return "warning: Password is too short! It needs at least " + minLength + " characters.";
    }

}

let message = validatePasswordLength(currentLength);
console.log(message);

//