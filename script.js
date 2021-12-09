"use strict";

var money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD');

var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : '',
    income : [],
    savings : false,
};

for (let i = 0; i < 1; i++) {

    let requiredExpenes = prompt('Введите обязательную статью расходов в этом месяце'),
        howMuch = prompt('Во сколько обойдется?');

    if (typeof(requiredExpenes) === 'string' && typeof(requiredExpenes) != null && typeof(howMuch) !== null && requiredExpenes != '' && howMuch != '' && requiredExpenes.length < 50) {
        console.log('done');
        appData.expenses[requiredExpenes] = howMuch;
    } else {

    }
}
// var i = 0;

// while (i < 2) {
//     let requiredExpenes = prompt('Введите обязательную статью расходов в этом месяце'),
//         howMuch = prompt('Во сколько обойдется?');

//     if (typeof(requiredExpenes) === 'string' && typeof(requiredExpenes) != null && typeof(howMuch) !== null && requiredExpenes != '' && howMuch != '' && requiredExpenes.length < 50) {
//         console.log('done');
//         appData.expenses[requiredExpenes] = howMuch;
//     } else {

//     }
//     i++;
// }

// do {
//     if (typeof(requiredExpenes) === 'string' && typeof(requiredExpenes) != null && typeof(howMuch) !== null && requiredExpenes != '' && howMuch != '' && requiredExpenes.length < 50) {
//         console.log('done');
//         appData.expenses[requiredExpenes] = howMuch;
    
//     } else {

//     }
//     i++;
// } while (i < 3);

appData.moneyPerDay = money / 30;

alert('Ежедневный бюджет' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 2000){
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
}
