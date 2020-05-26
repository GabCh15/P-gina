function validaForm() {
    if ($("#name").val() == "") {
        alert("El campo Nombre no puede estar vacío.");
        $("#name").focus();

    }
    if ($("#email").val() == "") {
        alert("El campo Correo Electrónico no puede estar vacío.");
        $("#email").focus();

    }
    if ($("#subject").val() == "") {
        alert("El campo Asunto no puede estar vacío.");
        $("#subject").focus();

    }
    if ($("#message").val() == "") {
        $("#message").focus();
        alert("El campo Mensaje no puede estar vacío.");

    }
    if(!$("#name").val() == "" && !$("#email").val() == "" && !$("#subject").val() == "" && !$("#message").val() == ""){
        $("#exito").delay(500).fadeIn("slow")
        $("#exito").delay(5000).fadeOut("slow")
    }

}

$(document).ready(function () {
    $("#btnEnviar").click(function () {
        validaForm()
    });
});



