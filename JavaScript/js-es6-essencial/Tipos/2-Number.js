const myNumber = 12.4032;

// Transforma número para string
const numberAsString = myNumber.toString();
console.log('\n Número transformado em sttring: ', typeof numberAsString);

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\n Número com duas casas decimais: ', fixedTwoDecimals);

// Transforma uma string em float
console.log('\n String parseada para float: ', typeof parseFloat('13.22'));

// Transforma uma string em int
console.log('\n String parseada para int: ', typeof parseInt('13.22'));

