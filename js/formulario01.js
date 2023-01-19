$('#form-index').submit(function(){
    var nome = $("#nome");
    var Sobrenome = $ ("#Sobrenome");
    var email = $ ("#email");
    var senha = $ ("#senha");
    var cidade = $ ("#cidade");
    var estado = $ ("#estado");
    var numero = $ ("#numero");
    var erro = $(".alert");
    var campo = $("#campo-erro");
    

    if (nome.val() == ""){
        erro.removeClass("d-none");
        campo.html("nome");
        nome.addClass("is-invalid");

        return false;
    }
    if (Sobrenome.val() == ""){
        erro.removeClass("d-none");
        campo.html("Sobrenome");
        Sobrenome.addClass("is-invalid");

        return false;
    }
    if (email.val() == ""){
        erro.removeClass("d-none");
        campo.html("email");
        email.addClass("is-invalid");

        return false;
    }
    if (senha.val() == ""){
        erro.removeClass("d-none");
        campo.html("senha");
        senha.addClass("is-invalid");

        return false;
    }
    if (cidade.val() == ""){
        erro.removeClass("d-none");
        campo.html("cidade");
        cidade.addClass("is-invalid");
        
        return false;

    }
    if (estado.val() == ""){
        erro.removeClass("d-none");
        campo.html("estado");
        estado.addClass("is-invalid");

        return false;
    }

    if (numero.val() == ""){
        erro.removeClass("d-none");
        campo.html("numero");
        numero.addClass("is-invalid");

        return false;
    }



    return true;
});