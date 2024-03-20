console.log("1. Count the total number of vowels including small & capital using for loop");

let str = "I am very good IT Developer";
str = str.toLowerCase();
let count = 0;

for(let i=0; i<str.length; i++) {
    if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u'){
        count++;
    }
}

console.log(`-> The count is : ${count}`);

console.log("2. Write a fn to get sum of cube of numbers from 1 to 5");

let add = 0;
for(let i=1; i<=5; i++) {
    add += i * i * i;
}
console.log(`-> ${add}`);

// console.log("3.");

let str1 = "Hard work always pays back";
let str2 = "Soon i will be UI IT Champ";

str1 = str1.replace(/\s/g, '');
str2 = str2.replace(/\s/g, '');

function oddPositionedChars(s) {
    for(let i=0; i<s.length; i++) {
        if(i%2 !==0) {
            process.stdout.write(`${s.charAt(i)}`);
        }
    }
}

console.log(`3. Odd position chars of "Hard work always pays back"`);
process.stdout.write(`-> `);
oddPositionedChars(str1);
console.log();
console.log(`3. Odd position chars of "Soon i will be UI IT Champ"`);
process.stdout.write(`-> `);
oddPositionedChars(str2);
