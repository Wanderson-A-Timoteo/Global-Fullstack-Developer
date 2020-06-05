const user = {
    name: 'Wanderson',
    lastName: 'Timóteo'
};

// Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\n Valres dos propriedades do objeto user: ', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\n Lista de propriedades e valores ', Object.defineProperties(user));

// Mergear propriedades de valores
Object.assign(user, {fullName: 'Wanderson de Almeida Timóteo'});

console.log('\n Adiciona a propriedade fullName no objeto user ', user);
console.log('\n Retorna um novo objeto mergeando dois ou mais objetos ', Object.assign({}, user, {age: 26}));

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\n variável newObj após as alterações: ', newObj);

// Permite apenas a alteração de propriedade existentes em um objeto
const person = { name: 'Guilherme'};
Object.seal(person);

console.log('\n Variável person após as alterações: ', person);