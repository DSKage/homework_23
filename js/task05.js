let a = Math.floor(Math.random() * 9 + 1);
let b = Math.floor(Math.random() * 9 + 1);

let answer = prompt(a + ' * ' + b + '= ??');

if (answer == a * b) {
    alert('Все верно!')
} else {
    alert('Неверно!')
}