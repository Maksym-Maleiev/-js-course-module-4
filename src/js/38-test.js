/*
 * Method 'sort()'
 */

const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores);
// [19, 35, 56, 61, 74, 92]

const score = [27, 2, 41, 4, 7, 3, 75];
score.sort();
console.log(score);
// [2, 27, 3, 4, 41, 7, 75]

const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];
students.sort();
console.log(students);
// [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
letters.sort();
console.log(letters);
// ["A", "B", "C", "a", "b", "c"]

const scor = [61, 19, 74, 35, 92, 56];
const ascendingScor = [...scor].sort();
console.log(scor);
// [61, 19, 74, 35, 92, 56]
console.log(ascendingScor);
// [19, 35, 56, 61, 74, 92]

/*
 * Exercise
 */

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);
