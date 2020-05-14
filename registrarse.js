function validaFormReg() {
    if ($("#nombre").val() == "") {
        alert("El campo Nombre no puede estar vacío.");
        $("#nombre").focus();

    }
    if ($("#apellido").val() == "") {
        alert("El campo Apellido no puede estar vacío.");
        $("#apellido").focus();

    }
    if ($("#correoIni").val() == "") {
        alert("El campo Correo Electrónico no puede estar vacío.");
        $("#correoIni").focus();

    }
    if ($("#contraseña").val() == "") {
        alert("El campo Contraseña no puede estar vacío.");
        $("#contraseña").focus();

    }
    if (!$("#mayor").is(":checked")) {
        alert("No puede ser menor de edad.");

    }

}

$(document).ready(function () {
    $("#btnEnviaReg").click(function () {
        validaFormReg()
    });
});