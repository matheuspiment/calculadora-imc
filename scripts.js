$(document).ready(function(){
    $("#formulario").submit(function(event) {
        var altura = $('#altura').val();
        var peso = $('#peso').val();
        var imc = peso / (altura * altura);
        swal({
            type: 'info',
            title: 'Resultado',
            text: "Seu IMC é " + imc.toFixed(2) + " e sua categoria é " + getIMCCategory(imc).toUpperCase(),
            showCloseButton: true,
        });
        event.preventDefault();
    });
})

function getIMCCategory(imc) {
    if (imc <= 16.9) {
        return "Muito abaixo do peso";
    }

    if (imc <= 18.4) {
        return "Abaixo do peso";
    }

    if (imc <= 24.9) {
        return "Peso normal";
    }

    if (imc <= 29.9) {
        return "Acima do peso";
    }

    if (imc <= 34.9) {
        return "Obesidade grau 1";
    }

    if (imc <= 40.0) {
        return "Obesidade grau 2";
    }

    return "Obesidade grau 3";
}

function showIMCTable() {
    swal({
        imageUrl: 'img/table-imc.png',
        imageAlt: 'Tabela IMC',
        showCloseButton: true,
      })
}

function moreInfo() {
    swal({
        type: 'info',
        title: 'Ímdice de Massa Corporal',
        text: 'IMC é a sigla para Índice de Massa Corporal que serve para avaliar o peso do indivíduo em relação à sua altura e assim indicar se está dentro do peso ideal, acima ou abaixo do peso desejado.',
        footer: '<a href="http://apps.who.int/bmi/index.jsp?introPage=intro_3.html">Click aqui para saber mais</a>',
        showCloseButton: true,
    });
}