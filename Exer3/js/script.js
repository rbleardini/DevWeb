
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(function() {
    $('[data-toggle="popover"]').popover();
});


$("#id_nome").blur(function() { validaNomeFunction() });
$("#id_email").blur(function() { validaEmailFunction() });
$("#id_faixa_etaria").blur(function () { validaFaixaEtariaFunction() });
$("#id_masculino").blur(function() { validaSexoFunction() });
$("#id_feminino").blur(function() { validaSexoFunction() });
$("#id_esporte").blur(function() { validaPreferenciaFunction() });
$("#id_cinema").blur(function() { validaPreferenciaFunction() });
$("#id_literatura").blur(function() { validaPreferenciaFunction() });

$("#formulario").submit(function(e) {
    e.preventDefault();
    let nomeValido = validaNomeFunction();
    let emailValido = validaEmailFunction();
    let faixaValido = validaFaixaEtariaFunction();
    let sexoValido = validaSexoFunction();
    let preferenciasValido = validaPreferenciaFunction();

    if (nomeValido && emailValido && faixaValido && sexoValido && preferenciasValido) {
        alert('Tudo OK.');

        console.log($("#id_nome").val());
        console.log($("#id_email").val());
        console.log($("#id_faixa_etaria").val());
        console.log($("#id_masculino").val());
        console.log($("#id_feminino").val());
        console.log($("#id_esporte").val());
        console.log($("#id_cinema").val());
        console.log($("#id_literatura").val());
    }
    else {
        alert('Deu erro!');
    }
});

function validaNomeFunction() {
    // console.log(e.charCode);
    // return e.charCode >= 48 && e.charCode <= 57;
    let nome = $("#id_nome");
    console.log(nome.val());
    if (nome.val() === '') {
        nome.addClass('is-invalid');
        nome.removeClass('is-valid');
        $("#idNomeRequired").removeClass('d-none');
        return false;
    }
    else {
        nome.removeClass('is-invalid');
        nome.addClass('is-valid');
        $("#idNomeRequired").addClass('d-none');
        return true;
    }
}

function validaEmailFunction() {
    let email = $("#id_email");
    console.log(email.val());
    if (email.val() === '') {
        email.addClass('is-invalid');
        email.removeClass('is-valid');
        $("#idEmailRequired").removeClass('d-none')
        return false;
    }
    else {
        $("#idEmailRequired").addClass('d-none');
        if (emailValido(email.val())) {
            email.removeClass('is-invalid');
            email.addClass('is-valid');
            $("#idEmailRequired").addClass('d-none');
            $("#idEmailValido").addClass('d-none');
            return true;
        }
        else {
            email.removeClass('is-valid');
            email.addClass('is-invalid');
            $("#idEmailRequired").addClass('d-none');
            $("#idEmailValido").removeClass('d-none');
            return false;
        }
    }
}

function validaFaixaEtariaFunction() {
    let faixa = $("#id_faixa_etaria");
    console.log(faixa.val());
    if (faixa.val() === '0') {
        faixa.addClass('is-invalid');
        faixa.removeClass('is-valid');
        $("#idFaixaEtariaRequired").removeClass('d-none');
        return false;
    }
    else {
        faixa.removeClass('is-invalid');
        faixa.addClass('is-valid');
        $("#idFaixaEtariaRequired").addClass('d-none');
        return true;
    }
}

function validaSexoFunction() {
    let masculino = $("#id_masculino");
    let feminino = $("#id_feminino");
    let bool_masculino = $("#id_masculino").prop('checked');
    let bool_feminino = $("#id_feminino").prop('checked');


    if (bool_masculino || bool_feminino) {
        masculino.removeClass('is-invalid');
        masculino.addClass('is-valid');
        feminino.removeClass('is-invalid');
        feminino.addClass('is-valid');
        $("#idSexoRequired").addClass('d-none');
        return true;
    }
    else {
        masculino.addClass('is-invalid');
        masculino.removeClass('is-valid');
        feminino.addClass('is-invalid');
        feminino.removeClass('is-valid');
        $("#idSexoRequired").removeClass('d-none');
        return false;
    }
}

function validaPreferenciaFunction() {
    let esporte = $("#id_esporte");
    let cinema = $("#id_cinema");
    let literatura = $("#id_literatura");
    let bool_esporte = $("#id_esporte").prop('checked');
    let bool_cinema = $("#id_cinema").prop('checked');
    let bool_literatura = $("#id_literatura").prop('checked');

    if (bool_esporte || bool_cinema || bool_literatura) {
        esporte.removeClass('is-invalid');
        esporte.addClass('is-valid');
        cinema.removeClass('is-invalid');
        cinema.addClass('is-valid');
        literatura.removeClass('is-invalid');
        literatura.addClass('is-valid');
        $("#idPreferenciasRequired").addClass('d-none');
        return true;
    }
    else {
        esporte.addClass('is-invalid');
        esporte.removeClass('is-valid');
        cinema.addClass('is-invalid');
        cinema.removeClass('is-valid');
        literatura.addClass('is-invalid');
        literatura.removeClass('is-valid');
        $("#idPreferenciasRequired").removeClass('d-none');
        return false;
    }
}

function emailValido(email) {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

