const fruits_seasonal = ['Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];

console.log('1. First & last element');
console.log(`-> First Element - ${fruits_seasonal[0]}`);
console.log(`-> Last Element - ${fruits_seasonal[fruits_seasonal.length-1]}`);

console.log();
console.log(`2. 'Papaya' before 'Banana'`);
fruits_seasonal.unshift('Papaya');
console.log(fruits_seasonal);

console.log();
console.log(`3. Remove 'Mango' from array`);
fruits_seasonal.splice(4, 1);
console.log(fruits_seasonal);

console.log();
console.log(`4. Add 'Pineapple' at last position`);
fruits_seasonal.push('Pineapple');
console.log(fruits_seasonal);

console.log();
console.log(`5. Add 'Dragon Fruit' before 'Water Melon'`);
fruits_seasonal.splice(4, 0, 'Dragon Fruit')
console.log(fruits_seasonal);

console.log();
console.log(`6. Replace 'Orange' with 'Kiwi'`);
fruits_seasonal.splice(2, 1, 'Kiwi')
console.log(fruits_seasonal);

console.log();
console.log(`7. Log elements starting from 1 to 4`);
const from1to4 = fruits_seasonal.slice(1, 5)
console.log(from1to4);

console.log();
console.log(`8. Only select last 3 elements`);
const last3 =  fruits_seasonal.splice(fruits_seasonal.length-3)
console.log(last3);