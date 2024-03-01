/*
 * Custom number sorting order
 */

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores);
// [19, 35, 56, 61, 74, 92]

const score = [61, 19, 74, 35, 92, 56];
const descendingScores = [...score].sort((a, b) => b - a);
console.log(descendingScores);
// [92, 74, 61, 56, 35, 19]

/*
 * Exercise
 */

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates];

const descendingReleaseDates = releaseDates;
