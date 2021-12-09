"use strict";

var money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    requiredExpenes = prompt('Введите обязательную статью расходов в этом месяце'),
    howMuch = prompt('Во сколько обойдется?');
var appData = {
    budget : money,
    timeData : time,
    expenses : {
        requiredExpenes : howMuch,
    },
    optionalExpenses : '',
    income : [],
    savings : false,
};


alert(money / 30);