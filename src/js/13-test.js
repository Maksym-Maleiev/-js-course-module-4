//! DIRTY FUNCTION
/*
const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};
const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Відбулася мутація вихідних даних – масиву numbers console.log(numbers);
// [2, 4, 6, 8, 10]
*/

// * PURE FUNCTION
/*
const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);
// Не відбулося мутації вихідних даних console.log(numbers);
// [1, 2, 3, 4, 5]
// Функція повернула новий масив із зміненими даними console.log(doubledNumbers);
// [2, 4, 6, 8, 10]
*/

function changeEven(numbers, value) {
  // Change code below this line
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = numbers[i] + value;
    }
  }
  // Change code above this line
}
