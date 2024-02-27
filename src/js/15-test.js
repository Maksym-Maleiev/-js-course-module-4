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

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];
// Change code below this line

const titles = books;

console.log(titles);
