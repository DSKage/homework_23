let skills = ['Сидеть на диване', 'Смотреть телевизор'];

skills[0] = 'HTML';
skills[1] = 'CSS';

skills.push('Sass')
skills.push('в процессе изучения JavaScript')
skills.push('частично владею Java Core')
skills.push('понимаю основы ООП')

console.log('Я работаю с ' + skills.join(', '));