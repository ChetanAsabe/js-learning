console.log();
console.log("1. Program to count prime numbers in [3, 9, 7, 6, 19, 29, 53].");
const arr = [3, 9, 7, 6, 19, 29, 53];
let count = 0;

function isPrime(num){
    for(let i=2; i< num; i++) {
        if(num % i == 0) 
            return false;
    }
    return true;
}

for(let i=0; i<arr.length; i++) {
    if(isPrime(i))
        count++;
}

console.log(`-> Prime number count in array is '${count}'.`);
console.log();

console.log("2. Write a program to count the spaces.");

function spaceCount(sentence) {
    let spaces = 0;
    for(let i=0; i<sentence.length; i++) {
        if(sentence.charAt(i) == " ") {
            spaces++;
        }
    }
    return `The space count in "${sentence}" is '${spaces}'.`;
}

console.log(`-> ${spaceCount("Revision is the mother of success")}`);
console.log(`-> ${spaceCount("JavaScript is the language of internet world")}`);
console.log();