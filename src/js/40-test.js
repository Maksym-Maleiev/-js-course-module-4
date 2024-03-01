/*
 * Custom row sort order
 */

'a'.localeCompare('b');
// -1
'b'.localeCompare('a');
// 1
'a'.localeCompare('a');
// 0
'b'.localeCompare('b');
// 0

const students = ['Jacob', 'Artemis', 'Solomon', 'Adrian', 'Kai', 'Ganymede'];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder);
// [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder);
// [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

/*
 * Exercise
 */

const authors = [
  'Tanith Lee',
  'Bernard Cornwell',
  'Robert Sheckley',
  'Fyodor Dostoevsky',
  'Howard Lovecraft',
];
// Change code below this line

const authorsInAlphabetOrder = authors;

const authorsInReversedOrder = authors;
