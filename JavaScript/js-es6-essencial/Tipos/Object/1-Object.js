let user = {
    name: 'Wanderson'
};

// Alterando a propriedade de um objeto
console.log(user);

user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'outro nome 2';

/*
// Segunda forma de pegar a propriedade name com function
console.log(user);
const prop = 'name';
user[prop] = 'Outro nome 3';

console.log(user);

function getProp(prop) {
    return user[prop];
}

*/

// Criando uma propriedade
user.lastName = 'Timóteo';

console.log(user);

/*
// Deletando uma propriedade
delete user.name;

console.log(user);
*/