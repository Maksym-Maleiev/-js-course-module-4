/*
 * Method 'some()'
 */

// Чи є хоча б один елемент більше або дорівнює нулю? - Так
console.log([1, 2, 3, 4, 5].some(value => value >= 0));
// true

// Чи є хоча б один елемент більше або дорівнює нулю? - так
console.log([-7, -20, 3, -10, -14].some(value => value >= 0));
// true

// Чи є хоча б один елемент менше нуля? - Ні
console.log([1, 2, 3, 4, 5].some(value => value < 0));
// false

// Чи є хоча б один елемент менше нуля? - Так
console.log([1, 2, 3, -10, 4, 5].some(value => value < 0));
// true

/*
 * Exercise
 */

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(number => number % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some();

const anyElementInSecondIsEven = secondArray.some();
const anyElementInSecondIsOdd = secondArray.some();

const anyElementInThirdIsEven = thirdArray.some();
const anyElementInThirdIsOdd = thirdArray.some();
