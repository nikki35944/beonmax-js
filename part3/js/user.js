let age = document.getElementById('age');
console.log(age);
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

showUser.apply(age, ['Святой', 'Источник']);