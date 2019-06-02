var modalLetter = document.querySelector("#modal-letter");
var modalOverlay = document.querySelector("#modal-overlay");
var modalLetterOpenButton = document.querySelector("#modal-letter-open");
var modalLetterCloseButton = document.querySelector("#modal-letter-close");
var modalMap = document.querySelector("#modal-map");
var modalMapOpenButton = document.querySelector("#modal-map-open");
var modalMapCloseButton = document.querySelector("#modal-map-close");

modalLetterCloseButton.addEventListener("click", function() {
    modalLetter.classList.toggle("modal-close");
    modalOverlay.classList.toggle("modal-close");
});

modalLetterOpenButton.addEventListener("click", function() {
    modalLetter.classList.toggle("modal-close");
    modalOverlay.classList.toggle("modal-close");
});

modalMapCloseButton.addEventListener("click", function() {
    modalMap.classList.toggle("modal-close");
    modalOverlay.classList.toggle("modal-close");
});

modalMapOpenButton.addEventListener("click", function () {
    modalMap.classList.toggle("modal-close");
    modalOverlay.classList.toggle("modal-close");
});

