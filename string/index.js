const name = "Raj "
const repoCount = 5;

console.log(name + repoCount + " value");//old"..."

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);//latest`...`

const gameName = new String(`BLACK-STORM`);
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.toLowerCase());
console.log(gameName.charAt(6));


//console.log(gameName.__proto__);
const newString = gameName.substring(0,5);
console.log(newString);


const anotherString = gameName.slice(-8,6);
console.log(anotherString);

const url = "https://raj.com/raj%20mathur"

console.log(url.replace('%20','-'));