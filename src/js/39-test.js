/*
 * Custom number sorting order
 */

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores);
// [19, 35, 56, 61, 74, 92]
