"use strict";

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
}
start();


var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : '',
    income : [],
    savings : true,
    chooseExpenses: function() {
        for (let i = 0; i < 1; i++) {

            let requiredExpenes = prompt('Введите обязательную статью расходов в этом месяце'),
                howMuch = prompt('Во сколько обойдется?');
        
            if (typeof(requiredExpenes) === 'string' && typeof(requiredExpenes) != null && typeof(howMuch) !== null && requiredExpenes != '' && howMuch != '' && requiredExpenes.length < 50) {
                console.log('done');
                appData.expenses[requiredExpenes] = howMuch;
            } else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (money / 30).toFixed();
        alert('Ежедневный бюджет' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка');
        } else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений'),
                percent = +prompt('Под какой процент');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 4; i++) {
            let expense = +prompt('Статья необязательных расходов?');
            appData.optionalExpenses[i] = expense;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)');
        if (typeof(items) != 'string' || items == '' || items == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }
        appData.income.forEach(function (itemArr, i) {
            alert ('Способы дополнительного заработка:' + (i + 1) + '-' + itemArr);
        });
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}