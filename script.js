// "use strict";

// let money, time;

// function start() {
//     money = +prompt('Ваш бюджет на месяц?');
//     time = prompt('Введите дату в формате YYYY-MM-DD');

//     while(isNaN(money) || money == "" || money == null) {
//         money = +prompt('Ваш бюджет на месяц?');
//     }
// }
// start();


// var appData = {
//     budget : money,
//     timeData : time,
//     expenses : {},
//     optionalExpenses : '',
//     income : [],
//     savings : true,
// };

// function chooseExpenses() {
//     for (let i = 0; i < 1; i++) {

//         let requiredExpenes = prompt('Введите обязательную статью расходов в этом месяце'),
//             howMuch = prompt('Во сколько обойдется?');
    
//         if (typeof(requiredExpenes) === 'string' && typeof(requiredExpenes) != null && typeof(howMuch) !== null && requiredExpenes != '' && howMuch != '' && requiredExpenes.length < 50) {
//             console.log('done');
//             appData.expenses[requiredExpenes] = howMuch;
//         } else {
    
//         }
//     }
// }
// chooseExpenses();

// function detectDayBudget() {
//     appData.moneyPerDay = (money / 30).toFixed();

//     alert('Ежедневный бюджет' + appData.moneyPerDay);

// }

// function detectLevel() {
//     if (appData.moneyPerDay < 100) {
//         console.log('Минимальный уровень достатка');
//     } else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 2000){
//         console.log('Средний уровень достатка');
//     } else if (appData.moneyPerDay > 2000) {
//         console.log('Высокий уровень достатка');
//     }
// }

// function checkSavings() {
//     if (appData.savings == true) {
//         let save = +prompt('Какова сумма накоплений'),
//             percent = +prompt('Под какой процент');

//         appData.monthIncome = save/100/12*percent;
//         alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
//     }
// }

// checkSavings();
let optionalExpenses = {};
function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let expense = +prompt('Статья необязательных расходов?');
        optionalExpenses[i] = expense;
    }
}

chooseOptExpenses();