// JavaScript Document
$(document).ready(function () {
    $("#autoWidth").lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $("#autoWidth").removeClass("cS-hidden");
        },
    });
});

//formulario

const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("envio");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute(
        "href",
        `mailto:yicell52@gmail.com?subject=nombre ${form.get(
            "name"
        )}  correo ${form.get("email")}&body=${form.get("message")}`
    );
    $buttonMailto.click();
}
