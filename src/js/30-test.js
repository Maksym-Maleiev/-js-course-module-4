/*
 * Method 'every()'
 */

// Усі елементи більше чи рівні нулю? - так
console.log([1, 2, 3, 4, 5].every(value => value >= 0));
// true

// Усі елементи більше чи рівні нулю? - ні
console.log([1, 2, 3, -10, 4, 5].every(value => value >= 0));
// false

/*
 * Exercise
 */

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
const eachElementInFirstIsOdd = firstArray;

const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
const eachElementInSecondIsOdd = secondArray;

const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
const eachElementInThirdIsOdd = thirdArray;

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);
console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);
console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd);
