
console.log('-------- Step 1 ---------');
console.log();

function greaterNumber(num1, num2){
    if(num1 > num2)
        console.log(`${num1} is Greater than ${num2}`);
    else
    console.log(`${num2} is Greater than ${num1}`);
}

greaterNumber(10, -10);
greaterNumber(800, 899);

console.log();
console.log('-------- Step 2 ---------');
console.log();

function isEvenOrOddNum(num) {
    var res = (num % 2 == 0) ? "Even" : "Odd";
    var op = `a Number ${num} is ${res}.`;
    return op;
}

console.log(isEvenOrOddNum(29));
console.log(isEvenOrOddNum(44));
console.log(isEvenOrOddNum(0));
console.log(isEvenOrOddNum(101));

console.log();
console.log('-------- Step 3 ---------');
console.log();

function wordLength(word) {
    var len = (word.length % 2 == 0) ? "Even" : "Odd";
    var send = `a Word ${word} is of ${len} length.`
    return send;
}

console.log(wordLength("JavaScript"));
console.log(wordLength("Developer"));
console.log(wordLength("Google"));