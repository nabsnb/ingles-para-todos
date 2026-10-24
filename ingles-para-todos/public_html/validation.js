$(document).ready(function () {

    $("#formulario").on("submit", function (event) {

        event.preventDefault();

        let formularioValido = true;

        // =========================
        // LIMPAR VALIDAÇÕES ANTERIORES
        // =========================

        $(".form-control, .form-select, .form-check-input")
            .removeClass("is-invalid is-valid");


        // =========================
        // NOME
        // =========================

        const nome = $("#nome").val().trim();

        if (nome.length < 2) {

            $("#nome").addClass("is-invalid");

            formularioValido = false;

        } else {

            $("#nome").addClass("is-valid");

        }


        // =========================
        // E-MAIL
        // =========================

        const email = $("#email").val().trim();

        const regexEmail =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email)) {

            $("#email").addClass("is-invalid");

            formularioValido = false;

        } else {

            $("#email").addClass("is-valid");

        }


        // =========================
        // NÍVEL DE INGLÊS
        // =========================

        const nivel = $("#nivel").val();

        if (nivel === "") {

            $("#nivel").addClass("is-invalid");

            formularioValido = false;

        } else {

            $("#nivel").addClass("is-valid");

        }


        // =========================
        // ORIGEM
        // =========================

        const origem = $("#origem").val();

        if (origem === "") {

            $("#origem").addClass("is-invalid");

            formularioValido = false;

        } else {

            $("#origem").addClass("is-valid");

        }


        // =========================
        // ACEITE
        // =========================

        const aceite = $("#aceite").is(":checked");

        if (!aceite) {

            $("#aceite").addClass("is-invalid");

            formularioValido = false;

        } else {

            $("#aceite").removeClass("is-invalid");

        }


        // =========================
        // RESULTADO
        // =========================

        if (formularioValido) {

            $("#mensagem")
                .removeClass("alert-danger")
                .addClass("alert alert-success")
                .html(
                    "<strong>Tudo certo!</strong><br>" +
                    "Seu acesso ao material gratuito está sendo preparado."
                )
                .fadeIn();

            // Chama a função responsável pelo acesso ao PDF
            abrirMaterial();

        } else {

            $("#mensagem")
                .removeClass("alert-success")
                .addClass("alert alert-danger")
                .html(
                    "<strong>Confira os campos.</strong><br>" +
                    "Preencha corretamente as informações destacadas."
                )
                .fadeIn();

            // Leva o usuário até a primeira mensagem
            $("html, body").animate({
                scrollTop: $("#mensagem").offset().top - 100
            }, 400);

        }

    });

});