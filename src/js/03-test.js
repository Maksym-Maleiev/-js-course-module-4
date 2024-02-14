function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

// Передаємо інлайн функцію greet як колбек
registerGuest('Mango', function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

// Передаємо інлайн функцію notify як колбек
registerGuest('Poly', function notify(name) {
  console.log(` Шановний ${name}, ваш номер буде готовий через 30 хвилин.`);
});
