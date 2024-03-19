
console.log("1. WAP to print numbers from 5 to 15 by incrementing 1");

process.stdout.write("--> ")
for(let i=5; i<=15; i++){
    process.stdout.write(`${i}  `);
}

console.log();
console.log();
console.log("2. WAP to print numbers from 50 to 40 by decrementing 1");

process.stdout.write("--> ")
for(let i=50; i>=40; i--){
    process.stdout.write(`${i}  `);
}
console.log();
console.log();
console.log("3. WAP to find first 15 odd numbers");

process.stdout.write("--> ")
for(let i=0; i<=30; i++) {
    process.stdout.write(`${i++}  `);
}
console.log();
console.log();
console.log("4. WAP to find first 10 even numbers");

process.stdout.write("--> ")
for(let i=1; i<=20; i++) {
    process.stdout.write(`${i++}  `);
}
console.log();
console.log();
console.log("5. WAP to print table of 5 like -> 5 10 15 20 25 ... 50");

process.stdout.write("--> ")
let num = 5;
for(let i=1; i<=10; i++) {
    process.stdout.write(`${num * i}  `);
}
console.log();
console.log();
console.log("6. WAP to print table of 10 like -> 10 20 30 40 ... 100");

process.stdout.write("--> ")
let num1 = 10;

for(let i=1; i<=10; i++) {
    process.stdout.write(`${num1 * i}  `)
}
console.log();
console.log();
console.log("7. WAP to print table of 10 in reverse order like -> 100 90 80 70 ... 10");

process.stdout.write("--> ")
let num2 = 10;

for(let i=10; i>=1; i--) {
    process.stdout.write(`${num2 * i}  `)
}