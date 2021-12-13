'use strict';


let startCount = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesInputs = document.getElementsByClassName('expenses-item');

let expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2];

let optionalExpensesInput = document.querySelectorAll('.optionalexpenses-item');

let chooseIncomeInput = document.querySelector('.choose-income'),
    savingsInput = document.querySelector('#savings'),
    sumInput = document.querySelector('.choose-sum'),
    percentInput = document.querySelector('.choose-percent'),
    yearInput = document.querySelector('.year-value'),
    monthInput = document.querySelector('.month-value'),
    dayInput = document.querySelector('.day-value');


console.log(dayInput);
