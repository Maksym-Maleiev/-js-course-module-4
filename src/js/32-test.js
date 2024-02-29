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
