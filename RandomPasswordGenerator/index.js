
function generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbols){
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-*/";

let allowedChar = "";
let password = "";

allowedChar += includeLowercase ? lowercasechars: "";
allowedChar += includeUppercase ? uppercasechars : "";
allowedChar += includeNumber ? numberChars : "";
allowedChar += includeSymbols ? symbolChars : "";

    if(passwordLength<=0){
        return `(Password length must be atleast 1)`;
    }
    if(allowedChar.length===0){
        return `(at least 1 set of character needs to be selected)`;
    }

    for(let i =0;i<passwordLength;i++){
        const randomIndex = Math.floor(Math.random()*allowedChar.length);
        password += allowedChar[randomIndex];
    }



    return password;
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumber,includeSymbols)

console.log(`Generated Password : ${password}`);

