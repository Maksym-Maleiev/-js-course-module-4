const students = [
  { name: 'Mango', courses: ['mathematics', 'physics'] },
  { name: 'Poly', courses: ['science', 'mathematics'] },
  { name: 'Kiwi', courses: ['physics', 'biology'] },
];

console.log(students.map(student => student.courses));
// [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

console.log(students.flatMap(student => student.courses));
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
