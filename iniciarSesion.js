function validaFormIni() {
    if ($("#correoIni").val() == "") {
        alert("El campo Correo Electrónico no puede estar vacío.");
        $("#correoIni").focus();

    }
    if ($("#contraseña").val() == "") {
        alert("El campo Contraseña no puede estar vacío.");
        $("#contraseña").focus();

    }


}

$(document).ready(function () {
    $("#btnEnviaReg").click(function () {
        validaFormIni()
    });
});