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

// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArr = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArr.push((element += value));
//     } else {
//       newArr.push(element);
//     }
//   });

//   return newArr;
// }
// // Change code above this line

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

function checkNumber(n) {
  // write code here
  let arr = [];

  if (n > 0) {
    arr.push(true);
  } else {
    arr.push(false);
  }

  if (n % 2 === 0) {
    arr.push(true);
  } else {
    arr.push(false);
  }

  if (n % 10 === 0) {
    arr.push(true);
  } else {
    arr.push(false);
  }

  return arr;
}

console.log(checkNumber(3)); // [true, false, false]
console.log(checkNumber(10)); // [true, true, true]
console.log(checkNumber(0)); // [false, true, true]
console.log(checkNumber(-1)); // [false, false, false]
