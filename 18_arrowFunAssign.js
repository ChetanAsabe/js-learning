
let greet = () => {
    console.log("Good Morning, Today is Monday.");
}

console.log();
console.log('1 . With no args & no return value, Log message on console inside arrow function.');
process.stdout.write(`-> `);
greet();


let multiplication = (num1, num2, num3=1) => {
    let res = num1 * num2 * num3;
    console.log(`Multiplication of ${num1}, ${num2} & ${num3} is '${res}'.`);
}

console.log();
console.log('2 . With 3 args & no return value, perform multiplication with arrow fn on args.');
process.stdout.write(`-> `);
multiplication(5, 5, 2);
process.stdout.write(`   `);
multiplication(10, 4);

console.log();
console.log('3 . with 5 args & return value such as it should perform the addtion on params.');
process.stdout.write(`-> `);
let add = (n1, n2, n3, n4, n5) => {
    return n1 + n2 + n3 + n4 + n5; 
}

console.log(`The addition of numbers is ${add(100, 100, 200, 349, 756)}.`);
process.stdout.write(`   `);
console.log(`The addition of words is : '${add("I am", " learning ", "ES6 ", "features ", "in depth.")}'`);
console.log();