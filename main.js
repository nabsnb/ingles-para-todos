// ==========================================
// INGLÊS PARA TODOS
// main.js
// ==========================================


// Caminho do material disponibilizado
const caminhoMaterial =
    "Ingles_para_Todos_Guia_Bilingue_Iniciantes.pdf";


// ==========================================
// ABRIR MATERIAL
// ==========================================

function abrirMaterial() {

    setTimeout(function () {

        window.open(
            caminhoMaterial,
            "_blank"
        );

    }, 800);

}


// ==========================================
// SCROLL SUAVE
// ==========================================

$(document).ready(function () {

    $('a[href^="#"]').on("click", function (event) {

        const destino = $(this.getAttribute("href"));

        if (destino.length) {

            event.preventDefault();

            $("html, body").animate({

                scrollTop:
                    destino.offset().top - 70

            }, 600);

        }

    });

});   