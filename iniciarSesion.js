function validaFormIni() {
    if ($("#correoIni").val() == "") {
        alert("El campo Correo Electrónico no puede estar vacío.");
        $("#correoIni").focus();

    }
    if ($("#contraseña").val() == "") {
        alert("El campo Contraseña no puede estar vacío.");
        $("#contraseña").focus();

    }
    if(!$("#correoIni").val() == "" && !$("#contraseña").val() == ""){
        $("#exito").delay(500).fadeIn("slow")
        $("#exito").delay(5000).fadeOut("slow")
    }







}

$(document).ready(function () {
    $("#btnEnviaReg").click(function () {
        validaFormIni()

    });
});
