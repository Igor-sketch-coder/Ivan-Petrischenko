let startIn = document.querySelector('#start'), // Начать расчет
    budget = document.querySelector('.budget-value'), // Доход
    daybudget = document.querySelector('.daybudget-value'), // Бюджет на 1 день
    level = document.querySelector('.level-value'), // Уровень дохода
    expenses = document.querySelector('.expenses-value'), // Обязательные расходы
    optionalexpenses = document.querySelector('.optionalexpenses-value'), // Возможные траты
    income = document.querySelector('.income-value'), // Дополнительный доход
    monthsavings = document.querySelector('.monthsavings-value'), // Накопления за 1 месяц
    yearsavings = document.querySelector('.yearsavings-value'), // Накопления за 1 год

    //Введите обязательные расходы
    expensesInt = document.querySelectorAll('.expenses-item'),
    //кнопки: утвердить утвердить рассчитать
    approve_1 = document.querySelector('.expenses-item-btn'),
    approve_2 = document.querySelector('.optionalexpenses-btn'),
    calculate = document.querySelector('.count-budget-btn'),

    //Введите необязательные расходы
    optionalexpensesIt = document.querySelectorAll('.optionalexpenses-item'),
    //Введите статьи возможного дохода через запятую
    chooseIn = document.querySelector('.choose-income'),
    // Есть ли накопления
    checksavings = document.querySelector('#savings'),
    // Сумма
    sumV = document.querySelector('.choose-sum'),
    // Процент
    percentV = document.querySelector('.choose-percent'),
    // Результат: год, месяц, день
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

// Начать расчет
startIn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', "");
    money = +prompt('Ваш бюджет на месяц?', "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', "");
    }
    appData.budget = money;
    appData.timeData = time;
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

approve_1.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesInt.length; i++) {
        let a = expensesInt[i].value,
            b = expensesInt[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log('no done');
            i--;
        }
    }
    expenses.textContent = sum;
});

approve_2.addEventListener('click', function () {
    for (let i = 0; i < optionalexpensesIt.length; i++) {
        let opt = optionalexpensesIt[i].value;
        appData.optionaExpenses[i] = opt;
        optionalexpenses.textContent += appData.optionaExpenses[i] + ' ';
    }
});

calculate.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        daybudget.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            level.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            level.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            level.textContent = "Высокий уровень достатка";
        } else {
            level.textContent = "Произошла ошибка";
        }
    }else {
        daybudget.textContent = "Произошла ошибка";
    }
});

chooseIn.addEventListener('input', function() {
    let incoms = chooseIn.value;
    appData.income = incoms.split(', ');
    income.textContent = appData.income;
});

checksavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    }else {
        appData.savings = true;
    }
});

sumV.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumV.value,
            percent = +percentV.value;
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});
percentV.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumV.value,
            percent = +percentV.value;
            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthsavings.textContent = appData.monthIncome.toFixed(1);
            yearsavings.textContent = appData.yearIncome.toFixed(1);
    }
});