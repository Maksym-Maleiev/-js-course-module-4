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
*/

function getFirstPosition(values, value) {
  values.forEach((element, index) => {});
}

console.log(getFirstPosition(['one', 'two', 'three'], 'three'));

console.log(getFirstPosition([1, 2, 3, 4], 99));
