var modalLetter = document.querySelector("#modal-letter");
var modalLetterOverlay = document.querySelector("#modal-letter-overlay");
var modalMapOverlay = document.querySelector("#modal-map-overlay");
var modalLetterOpenButton = document.querySelector("#modal-letter-open");
var modalLetterCloseButton = document.querySelector("#modal-letter-close");
var modalMap = document.querySelector("#modal-map");
var modalMapOpenButton = document.querySelector("#modal-map-open");
var modalMapCloseButton = document.querySelector("#modal-map-close");

var form = modalLetter.querySelector("#modal-letter-form");
var name = modalLetter.querySelector("#modal-name");
var email = modalLetter.querySelector("#modal-email");
var coverLetter = modalLetter.querySelector("#modal-cover-letter");

modalLetterCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalLetter.classList.toggle("modal-close");
    modalLetterOverlay.classList.toggle("modal-close");
});

modalLetterOpenButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalLetter.classList.toggle("modal-close");
    modalLetterOverlay.classList.toggle("modal-close");
});

modalMapCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.toggle("modal-close");
    modalMapOverlay.classList.toggle("modal-close");
});

modalMapOpenButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.toggle("modal-close");
    modalMapOverlay.classList.toggle("modal-close");
});

modalLetterOverlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalLetter.classList.toggle("modal-close");
    modalLetterOverlay.classList.toggle("modal-close");
});

modalMapOverlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.toggle("modal-close");
    modalMapOverlay.classList.toggle("modal-close");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (!modalLetter.classList.contains("modal-close")) {
            modalLetter.classList.add("modal-close");
            modalLetterOverlay.classList.add("modal-close");
        }
        else if (!modalMap.classList.contains("modal-close")) {
            modalMap.classList.add("modal-close");
            modalMapOverlay.classList.add("modal-close");
        }
    }
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !coverLetter.value) {
        evt.preventDefault();
        modalLetter.classList.remove("modal-error");
        /*modalLetter.offsetWidth = modalLetter.offsetWidth;*/
        modalLetter.classList.add("modal-error");
    }
});