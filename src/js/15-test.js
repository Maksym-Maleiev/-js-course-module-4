function createArray(N) {
  // write code here
  let arr = [];

  for (let i = 1; i <= N; i += 1) {
    const n = N[i];
    if (N > 0) {
      arr.push(n);
    } else {
      arr = [];
    }
  }

  return arr;
}

console.log(createArray(1));
console.log(createArray(3));
console.log(createArray(0));
