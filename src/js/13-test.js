const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};
const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2); // Відбулася мутація вихідних даних – масиву numbers console.log(numbers); // [2, 4, 6, 8, 10]
