let shoots = ['попал', 'попал', 'промах', 'попал', 'промах', 'попал', 'промах', 'попал',];
let missing = 0;
let hit = 0;


for (let index = 0; index < shoots.length; index++) {
    if (shoots[index] == 'попал') {
        hit++;
    } else if (shoots[index] == 'промах') {
        missing++;
    }
}

console.log('Количество попаданий: ' + hit + '\n' + 'Количество промахов: ' + missing);