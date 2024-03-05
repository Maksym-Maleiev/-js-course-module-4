const students = [
  { name: 'Mango', courses: ['mathematics', 'physics'] },
  { name: 'Poly', courses: ['science', 'mathematics'] },
  { name: 'Kiwi', courses: ['physics', 'biology'] },
];

console.log(students.map(student => student.courses));
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

console.log(students.flatMap(student => student.courses));
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism'],
  },
];
// Change code below this line

const genres = books.flatMap(({ genres }) => genres);

console.table(genres);
