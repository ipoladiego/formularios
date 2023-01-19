$('#form-home').submit(function(){
    var email = $("#email");
    var senha = $("#senha");
    var erro = $(".alert");
    var campo = $("#campo-erro");

    erro.addClass("d-none");

    if (email.val() == ""){ 
        erro.removeClass('d-none');   
        campo.html("email"); 
        email.addClass("is-invalid");

        return false;

    }
    if(senha.val() == ""){
        erro.removeClass('d-none');
        campo.html("senha"); 
        senha.addClass("is-invalid");


        return false;
    }
    return true;
});
