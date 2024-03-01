/*
 * Sorting objects
 */

const students = [
  { name: 'Mango', score: 83 },
  { name: 'Poly', score: 59 },
  { name: 'Ajax', score: 37 },
  { name: 'Kiwi', score: 94 },
];

const inAscendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = [...students].sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);

console.log(inAscendingScoreOrder);
console.log(inDescendingScoreOrder);
console.log(inAlphabeticalOrder);

/*
 * Exercise
 */

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

const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
  firstAuthor.author.localeCompare(secondAuthor.author)
);

const sortedByReversedAuthorName = [...books].sort(
  (firstAuthor, secondAuthor) =>
    secondAuthor.author.localeCompare(firstAuthor.author)
);

const sortedByAscendingRating = [...books].sort(
  (firstRating, secondRating) => firstRating.rating - secondRating.rating
);

const sortedByDescentingRating = [...books].sort(
  (firstRating, secondRating) => secondRating.rating - firstRating.rating
);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating);
