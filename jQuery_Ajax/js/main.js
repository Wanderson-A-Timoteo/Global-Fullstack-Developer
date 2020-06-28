// Requisição Ajax utilizando a biblioteca jQuery
function consultaCep() {
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    console.log(cep);
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            $(".barra-progresso").show();

            console.log(response);
            //Podemos executar de 2 formas a requisição
            //Dessa forma fica enxuto o código $("#logradouro").html(response.logradouro)
            // ou document.getElementById("logradouro").innerHTML = response.logradouro;

            //$("#logradouro").html(response.logradouro)
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;


            $("#Logradouro").html(response.logradouro)
            $("#Bairro").html(response.bairro)
            $("#Localidade").html(response.localidade)
            $("#UF").html(response.uf)
            $("#titulo_cep").html("CEP: " + response.cep)
            $(".cep").show();
            $(".barra-progresso").hide();




        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progresso").hide();
})

