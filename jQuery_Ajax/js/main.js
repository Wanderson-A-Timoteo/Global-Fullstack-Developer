// Requisição Ajax utilizando a biblioteca jQuery
function consultaCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    console.log(cep);
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            //Podemos executar de 2 formas a requisição
            //$("#logradouro").html(response.logradouro) dessa forma fica enxuto o código
            // ou document.getElementById("logradouro").innerHTML = response.logradouro;
            $("#logradouro").html(response.logradouro)
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;

        }
    })
}