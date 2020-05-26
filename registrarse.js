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
    if(!$("#nombre").val() == "" && !$("#apellido").val() == "" && !$("#correoIni").val() == "" && !$("#contraseña").val() == "" && $("#mayor").is(":checked")){
        $("#exito").delay(500).fadeIn("slow")
        $("#exito").delay(5000).fadeOut("slow")
    }
}

$(document).ready(function () {
    $("#btnEnviaReg").click(function () {
        validaFormReg()
    });
});
