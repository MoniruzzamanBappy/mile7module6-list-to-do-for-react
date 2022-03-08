const students = {
    ide: 'VS Code',
    designation: 'developer',
    language: ['html', 'css', 'js'],
    info: {
        name: 'kamala banu',
        id: 101,
        address: 'dhaka'
    },
    phone: 0122222222,
    drinks: 'water'
}

const { ide, phone } = students;

console.log(ide);

const { id, address } = students.info;
console.log(id);

const [a, b] = students.language;
console.log(a, b);