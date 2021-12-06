let login = prompt('Введите Login');
let password;

if (login == 'root') {
    password = prompt('Введите пароль');
    if (password == 'secret') {
        alert('Добро пожаловать!')
    } else if (password == null) {
        alert('Вход отменен')
    } else {
        alert('Неверный пароль')
    }
} else if (login == '') {
    alert('Укажите Login');
} else if (login == null) {
    alert("Вход отменен");
} else {
    alert('Неизвестный пользователь');
}