/*
const students = [
  { name: 'Mango', courses: ['mathematics', 'physics'] },
  { name: 'Poly', courses: ['science', 'mathematics'] },
  { name: 'Kiwi', courses: ['physics', 'biology'] },
];

const allCourses = students.flatMap(student => student.courses);
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

console.log(uniqueCourses);
*/

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    genres: ['adventure', 'history'],
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    genres: ['fiction', 'mysticism'],
  },
  {
    title: 'Redder Than Blood',
    author: 'Tanith Lee',
    genres: ['horror', 'mysticism', 'adventure'],
  },
];
// Change code below this line
const allGenres = books;
const uniqueGenres = allGenres;
