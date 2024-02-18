function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Change code below this line

  numbers.foreach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}
