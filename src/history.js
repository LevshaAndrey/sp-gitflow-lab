// Простейшее хранилище истории операций.
const MAX_ENTRIES = 10;
const entries = [];

function record(expression, result) {
  entries.push(`${expression} = ${result}`);
  if (entries.length > MAX_ENTRIES) {
    entries.shift();
  }
}

function all() {
  return entries.slice();
}

module.exports = { record, all };
