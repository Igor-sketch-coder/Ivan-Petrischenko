'use strict';

let money = prompt('Ваш бюджет на месяц?', ""),
  time = prompt('Введите дату в формате YYYY-MM-DD', "");

let appData = {
  budget: money, // бюджет
  timeData: time, //данные времени
  expenses: {}, // обязательные расходы
  optionaExpenses: {}, // необязательные расходы
  income: [], // дополнительные расходы
  savings: false
}

for (let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную сталью расходов в этом месяце', ""),
    b = prompt('Во сколько обойдётся?', '');
  appData.expenses[a] = b;
}

console.log(appData.expenses);
alert('Бюджет на 1 день = ' + money / 30 + ' руб');
console.log('Бюджет на 1 день = ' + money / 30 + ' руб');
console.log(`Бюджет на 1 день = ${money / 30} руб`);