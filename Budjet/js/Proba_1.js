'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', "");
  time = prompt('Введите дату в формате YYYY-MM-DD', "");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', "");
  }
}
start();

let appData = {
  budget: money, // бюджет
  timeData: time, //данные времени
  expenses: {}, // обязательные расходы
  optionaExpenses: {}, // необязательные расходы
  income: [], // дополнительные расходы
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную сталью расходов в этом месяце', ""),
        b = prompt('Во сколько обойдётся?', '');

      if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
      } else {
        console.log('no done');
        i--;
      }
    }
  },
  chooseOptExpenses: function () {
    for (let i = 0; i < 3; i++) {
      let c = prompt('Статья необязательных расходов ' + (i + 1), '');
      appData.optionaExpenses[i + 1] = c;
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Бюджет на один день = " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseIncome: function () {
    let a = prompt('Ваши способы дополнительного заработка Перечислите через запятую)', "");
    appData.income = a.split(',');
    appData.income.push(prompt('Может что-то ещё?', ''));

    console.log("Способы дополнительного заработка: ");
    appData.income.forEach(function (elenent, i) {
      console.log((i + 1) + ': ' + elenent);
    });
  }
}
// appData.chooseExpenses();
// appData.chooseOptExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
//appData.chooseIncome();

// console.log("Наша программа включает в себя данные: ")
// for (let key in appData) {
//   console.log(key);
// }