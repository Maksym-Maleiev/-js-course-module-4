/*
 * Method 'find()'
 */

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

console.log(colorPickerOptions.find(option => option.label === 'blue'));
// { label: "blue", color: "#2196F3" }

console.log(colorPickerOptions.find(option => option.label === 'pink'));
// { label: "pink", color: "#E91E63" }

console.log(colorPickerOptions.find(option => option.label === 'white'));
// undefined

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
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books;
const bookByAuthor = books;
