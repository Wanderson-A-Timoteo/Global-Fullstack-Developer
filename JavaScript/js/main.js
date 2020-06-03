
var nome = "Wanderson Timóteo"; //Declarando uma string
var idade = 36;//Declarando um numero maisculas
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var n1 = 5, n2 = 3;
var lista = ["pêra", "maça", "laranja"]; //Inicia um Arry 

//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2);

console.log(nome);//mostra o valor da variavel nome
console.log(idade + idade2);//soma os 2 valores
console.log(frase); //mostra o valor da variavel frase
console.log(frase.replace("Japão", "Brasil"));//Altera o valor da primeira expressão se conter, pela segunda expressão
//alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase()); //Altera as letras para maisculas
console.log(frase.toLowerCase());//Altera as letras para minusculas
console.log(n1 * n2);//multiplica os numeros
console.log(lista);//Mostra todos os elementos da lista
console.log(lista[1]);//mostra o elemento na posição 1 da lista, neste caso o segundo elemento pois a lista inicia na posição zero (0).
//alert(lista[2]);
lista.push("uva");//acrescenta um item na lista no ultimo elemento
console.log(lista);
lista.pop(); //remove o ultimo elemento da lista
console.log(lista.length); //Conta quantos elementos tem no Array
console.log(lista.reverse());//O metodo reverse altera a lista e descreve ses elementos em ordem decrescente 
console.log(lista.toString());//O metodo converte todos os elementos em uma string, perdendo a referencia de um Array[] 
console.log(lista.join(" - "));//O metodo converte todos os elementos em uma string, perdendo a referencia de um Array[], e separa os elementos por um traso, deste modo podemos definir qq tipo de separação
console.log(lista.join(" | "));// separação com pipeline
console.log(lista.join("  ")); // separação apenas com espaço
console.log(lista.join(""));// sem separação, juntando todos os elementos

var fruta = {
    nome:"maça",
    cor: "vermelha"
};// Este é um dicionario, parece com um objeto JSON

console.log(fruta); // Mostra todos os elementos dentro do dicionario
console.log(fruta.nome); // Mostra apenas os elementos NOME
//alert(fruta.cor); // Mostra um alerta com o valor de COR

var frutas = [
    {
        nome:"maça",
        cor: "vermelha"
    },
    {   
        nome:"uva",
        cor: "roxa"
    }
];// Este é uma lista de dicionario, ou seja, é um Array de dicionario

console.log(frutas);
alert(frutas[1].nome);

