const { add, subtract, divide, multiply } = require('./calculator');

// Демонстрационный CLI учебного проекта.
// Здесь проверяются операции калькулятора.

function demoBasic() {
  console.log('Калькулятор — учебный Git Flow проект');
  console.log('2 + 3 =', add(2, 3));
  console.log('7 - 4 =', subtract(7, 4));
  console.log('8 / 2 =', divide(8, 2));
  console.log('6 * 7 =', multiply(6, 7));
}

function main() {
  demoBasic();
}

main();

// Демонстрация истории операций (feature/history).
const { record, all } = require('./history');
record('2 + 3', add(2, 3));
record('7 - 4', subtract(7, 4));
record('8 / 2', divide(8, 2));
console.log('История операций:', all());
