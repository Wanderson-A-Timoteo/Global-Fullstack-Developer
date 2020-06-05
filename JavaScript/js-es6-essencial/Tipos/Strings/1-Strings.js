// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log('Quantidade de letras: ${textSize}');

// Retorna um Array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\n Array com as posições separadas pelo delimitador: ', splittedText);

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');

// Retorna a "fatia" de um valor, como foi passado -1 ele retorna o último caractrs
const lastChar = 'Texto'.slice(-1);
console.log('\n Última letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\n valor da string da primeira letra menos a última: ', allWithoutLastChar);


const secondToEnd = 'Texto'.slice(1);
console.log('\n valor da string da segunda letra até a última: ', secondToEnd);

// Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\n As duas primeiras letras são: ', twoCharsBeforeFirstPos);

