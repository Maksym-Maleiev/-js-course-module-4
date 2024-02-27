/*
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
*/

const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
  { name: 'Houston', score: 64 },
];

const names = students.map(student => student.name);
console.log(names);
// ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
