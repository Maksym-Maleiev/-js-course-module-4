/*
function getFirstPosition(values, value) {
  for (let i = 0; i < values.length; i += 1) {
    const element = values[i];
    if (element === value) {
      return i;
    }
  }

  return -1;
}
*/

/*
function getFirstPosition(values, value) {
  for (const el of values) {
    const index = values.indexOf(el);

    if (el === value) {
      return index;
    }
  }

  return -1;
}

console.log(getFirstPosition(['one', 'two', 'three'], 'three'));

console.log(getFirstPosition([1, 2, 3, 4], 99));
*/

// Change code below this line

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Change code above this line
  return quantity * pricePerItem;
};

console.log(calculateTotalPrice(5, 100));
console.log(calculateTotalPrice(8, 60));
console.log(calculateTotalPrice(3, 400));
