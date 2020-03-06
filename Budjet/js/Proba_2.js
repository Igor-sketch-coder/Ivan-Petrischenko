let startIn = document.querySelector('#start'), // Начать расчет
    budget= document.querySelector('.budget-value'), // Доход
    daybudget = document.querySelector('.daybudget-value'), // Бюджет на 1 день
    level = document.querySelector('.evel-value'), // Уровень дохода
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
    chooseIn = document.querySelector('.choose-income').value,
    // Есть ли накопления
    checksavings = document.querySelector('#savings').checked,
    // Сумма
    sum = document.querySelector('.choose-sum').value,
    // Процент
    percent = document.querySelector('.choose-percent').value,
    // Результат: год, месяц, день
    year = document.querySelector('.year-value').value,
    month = document.querySelector('.month-value').value,
    day = document.querySelector('.day-value').value;

  


