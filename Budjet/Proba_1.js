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

  if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
    console.log('done');
    appData.expenses[a] = b;
  } else {
    console.log('no done');
    i--
  }
  
}

let moneyPerDay = appData.budget/30;

if ( moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
}else if (moneyPerDay > 100 && moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
}else if (moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
}else {
  console.log("Произошла ошибка");
}
