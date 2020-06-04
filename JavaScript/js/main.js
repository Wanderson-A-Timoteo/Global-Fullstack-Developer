/*
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
//alert(frutas[1].nome);

/*var idade = 18;

if(idade >= 18) {
    alert("maior de idade");

}else{
    alert("menor de idade"); // Neste exemplo o alerta aparecerá com o resultado assim que o navegador abrir
}
*/

/*
var idade = prompt("Qual sua idade"); // Neste exemplo aparecerá um alerta para o user digitar a idade, só então ele compara e mostra o resultado
if(idade >= 18) {
    alert("maior de idade");

}else{
    alert("menor de idade");
};
*/


/*
var count = 0;
while(count <= 5) {
    console.log(count);
    alert(count);
    count++;
}; // Enquanto count for menor que 5 vai acrescentar somar mais 1 e mostrar o resultado no alert 
*/

/*
var count;
for (count = 0; count <=5; count++) {
    alert(count);
} // Enquanto count for menor que 5 vai acrescentar somar mais 1 e mostrar o resultado no alert 
*/

/*
var d = new Date();
alert(d);

var d = new Date();
alert(d.getDay()); // Pega o valor do sistema operacional
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
*/

/*
function soma(n1, n2) {
    return n1 + n2;
}

function setRepace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome);
}

alert(soma(5, 19));
alert(setRepace("Vai Japão", "Japão", "Brasil"));


function validarIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    }else{
        validar = false;
    }
   return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validarIdade(idade));

// Função que ao user clicar no botão aparece o alert
function clicou() {
    alert("Obrigado por clicar!");
}

// Função retorna no console.log todo o elemento <h3 id="agradecimento"></h3>, do arq. html
function clicou() {
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento"));
}


// Função retorna na pagina web a inserção do texto "Obrigado por clicar"
function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}



// Podemos colocar html no innerHTML, neste caso <b></b> retorna em negrito
function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}


function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

// Abre em uma nova aba do navegador
function redirecionar() {
   window.open("https://www.faspec.edu.br"); 
    
}

// Abre na mesma aba
function redirecionar() {
    window.location.href = "https://www.faspec.edu.br"; 
 }

// Mostra o alerta quando passamos o mouse 
function trocar() {
    alert("Trocar texto");
}


// Troca a mensagem pela que o innerHTML injeta
function trocar() {
    document.getElementById("mousemove").innerHTML = "<b>Obrigado por passar o mouse</b>"; 
}


function voltar() {
    document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui</b>"; 
}

*/


// Troca pelo mesmo elemento this = Obrigado por passar o mouse
function trocar(elemento) {
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>"; 
}

// Volta para omesmo elemento this = Passe o mouse aqui
function voltar(elemento) {
    elemento.innerHTML = "<b>Passe o mouse aqui</b>"; 
}

// A função onload é chamada quando o body é carregado, ou podemos colocar em outra parte do codigo quando precisamos
function load() {
    alert("Página carregada");
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}