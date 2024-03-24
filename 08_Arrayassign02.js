
const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log("1. Find the total elements in arrayNumber");

process.stdout.write('-> ');
for(let i=0; i<arrayNumber.length; i++) {
    process.stdout.write(`${arrayNumber[i]} `);
}

console.log();

console.log("2. Log the first & last element");

process.stdout.write('-> ');
console.log(`First element - ${arrayNumber[0]}`);
console.log(`   Last element - ${arrayNumber[arrayNumber.length-1]}`);


console.log("3. Log the third last element");
process.stdout.write('-> ');
console.log(arrayNumber[arrayNumber.length-3]);

console.log("4. Find all even numbers using for loop");

process.stdout.write('-> ');
arrayNumber.forEach(n => {
    if(n % 2 == 0) {
        process.stdout.write(`${n} `);
    }
});

console.log();
console.log("5. Find all odd numbers using for of loop");
process.stdout.write('-> ');
for (const i of arrayNumber) {
    if(i % 2 !== 0) {
        process.stdout.write(`${i} `);
    }
}
console.log();

console.log("6. Find all even positioned elements & sum it");

process.stdout.write('-> ');

let sum1 = 0;
for(let i=0; i<arrayNumber.length; i+=2) {
    sum1 += arrayNumber[i];
}
console.log(sum1);

console.log("7. Find all odd positioned elements & sum it");
process.stdout.write('-> ');

let sum2 = 0;
for(let i=1; i<arrayNumber.length; i+=2) {
    sum2 += arrayNumber[i];
}
console.log(sum2);

console.log("8. Find sum of all elements from arrayNumber");
process.stdout.write('-> ');

let sum = 0;
for(let i=0; i<arrayNumber.length; i++) {
    sum += arrayNumber[i];
}
console.log(sum);

console.log("9. Find the numbers which are multiple of 5");
process.stdout.write('-> ');

arrayNumber.forEach(num => {
    if(num % 5 == 0) {
        process.stdout.write(`${num} `);
    }
})

console.log();
console.log("10. Is number 115 available in array?");
process.stdout.write('-> ');

let isPresent = false;

arrayNumber.forEach(a => {
    if(a == 115) {
        isPresent = true;
    }
})
console.log(isPresent);

console.log("11. Is number 23 available in array?");
process.stdout.write('-> ');

arrayNumber.forEach(a => {
    if(a == 23) {
        isPresent = true;
    }
})
console.log(isPresent);

console.log("12. insert 55, 66 at index 3 in array");

arrayNumber.splice(3, 0, 55,66);
console.log(arrayNumber);

console.log("13. delete 3 elements starting from index 4 & log it");

arrayNumber.splice(4, 3);
console.log(arrayNumber);