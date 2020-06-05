const users = ['Wanderson', 'Ryan', 'Jeane'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Wanderson',
        age: 36,
        gender: gender.MAN
    },
    {
        name: 'Ryan',
        age: 7,
        gender: gender.MAN
    },
    {
        name: 'Jeane',
        age: 37,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Itens: ', persons.length);

// Verificar se é Array
console.log(' A variável persons é um Array: ', Array.isArray(persons));

// Iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log('Nome: ${person.name} index: ${index}', arr);
});

// Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\n Nova lista apenas com homens: ', mens);

// Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

// Transformar um array
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\n Soma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log('\n Soma de idade das pessoas que possuem idade par', totalEvenAges);