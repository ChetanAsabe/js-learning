const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log('1 . Add 10 into each element & log array on console.');

const resArr = arrayNumbers.map((element) => {
    return element + 10;
})

console.log(resArr);

console.log('2 . Cube each array element & log array on console.');

const cubeArr = arrayNumbers.map((element) => {
    return element * element * element;
})

console.log(cubeArr);

console.log('3 . Add the index value into its corresponding each array element & log array on console.');

const res = arrayNumbers.map((element, index) => {
    return element + index;
})
console.log(res);