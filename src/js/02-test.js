/*
// Колбек-функція
function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}
// Функція вищого порядку
function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}
registerGuest('Mango', greet);
*/

function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

// Chande code below this line
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

console.log(makeMessage('Royal Grand', makePizza));

console.log(makeMessage('Ultracheese', deliverPizza));
