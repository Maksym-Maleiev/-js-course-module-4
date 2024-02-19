/*
const numbers = [5, 10, 15, 20, 25];

// Оголошення функції
numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
});

// Анонімна стрілочна функція
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
});
*/

/*
function getFirstPosition(values, value) {
  let index = -1;

  values.forEach((element, inx) => {
    if (element === value) {
      index += inx + 1;
    }
  });

  return index;
}

console.log(getFirstPosition(['one', 'two', 'three'], 'three'));

console.log(getFirstPosition([10, 20, 30, 40, 50], 20));

console.log(getFirstPosition([99, 55, 22, 44, 77], 44));

console.log(getFirstPosition([1, 2, 3, 4], 99));

console.log(getFirstPosition([], 42));
*/

/*
const numbers = [5, 10, 15, 20, 25];
const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage);
*/

// Change code below this line
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach(item => {
    totalPrice += item;
  });

  return totalPrice;
};
// Change code above this line

console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
