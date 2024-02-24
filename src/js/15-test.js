function createArray(N) {
  // write code here
  let arr = [];

  if (N > 0) {
    arr.push(N);
  } else {
    arr = [];
  }

  return arr;
}

console.log(createArray(1));
console.log(createArray(3));
console.log(createArray(0));
