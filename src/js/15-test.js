function createArray(N) {
  // write code here
  let arr = [];

  for (let i = 1; i <= N; i += 1) {
    const number = i;
    console.log(number);

    if (i > 0) {
      arr.push(i);
    }
  }

  return arr;
}

console.log(createArray(1));
console.log(createArray(3));
console.log(createArray(0));
