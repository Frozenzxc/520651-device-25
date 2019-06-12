//управление состоянием модальных окон

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

var modal = function(modalObj, modalOverlay) {
    modalObj.classList.toggle("modal-close");
    modalOverlay.classList.toggle("modal-close");
};


modalLetterCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal(modalLetter, modalLetterOverlay);
});

modalLetterOpenButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal(modalLetter, modalLetterOverlay);
});

modalMapCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal(modalMap, modalMapOverlay);
});

modalMapOpenButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal(modalMap, modalMapOverlay);
});

modalLetterOverlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal(modalLetter, modalLetterOverlay);
});

modalMapOverlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal(modalMap, modalMapOverlay);
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (!modalLetter.classList.contains("modal-close")) {
            modal(modalLetter, modalLetterOverlay);
        }
        else if (!modalMap.classList.contains("modal-close")) {
            modal(modalMap, modalMapOverlay);
        }
    }
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !coverLetter.value) {
        evt.preventDefault();
        modalLetter.classList.remove("modal-error");
        modalLetter.classList.add("modal-error");
    }
});


//слайдеры

var slider = function (arrDots, arrSlides, timer) {
    var nextDot;
    var nextSlide;
    nextDot = arrDots[timer];
    nextSlide = arrSlides[timer];
    currentDot.classList.remove("counter-btn-active");
    currentSlide.classList.remove("slider-item-active");
    nextDot.classList.add("counter-btn-active");
    nextSlide.classList.add("slider-item-active");
    currentDot = nextDot;
    currentSlide = nextSlide;
};

//промо слайдер(верхний)

var sliderItems = document.querySelectorAll(".slider-item");
var sliderButtons = document.querySelectorAll(".counter-btn");
var currentDot = document.querySelector(".counter-btn-active");
var currentSlide = document.querySelector(".slider-item-active");

var currentIndex = function () {
    var array = Array.from(sliderButtons);
    return  array.indexOf(currentDot) + 1;
};



var sliderCounter = document.querySelector('.slider-counter');
var dotSlider = function(evt) {
        var counter = evt.dataset.id;
        var btnActive = "counter-btn-active";
        var sliderActive = "slider-item-active";
        slider(sliderButtons, sliderItems, counter);
    };

sliderCounter.addEventListener('click', function(evt) {
    var dot = evt.target.closest('.counter-btn');

    dotSlider(dot);
});

var sliderTimer = function() {
    var counter = currentIndex();
    if(counter < sliderButtons.length) {
        slider(sliderButtons, sliderItems, counter);
    }
    else {
        counter = 0;
        slider(sliderButtons, sliderItems, counter);
    }
};

setInterval(sliderTimer,2000);

//слайдер услуг(нижний)

var servicesButtons = document.querySelectorAll(".main-services-link-active");
var servicesSlides = document.querySelectorAll(".services-description-item");
var currentServicesBtn = document.querySelector(".main-services-link-active");
var currentservicesSlide = document.querySelector(".services-description-item-active");

var servicesCounter = document.querySelector('.main-services-list');
var servicesSlider = function(evt) {
    var counter = evt.dataset.id;
    var nextSlide;
    nextSlide = servicesSlides[counter];
    currentservicesSlide.classList.remove("services-description-item-active");
    nextSlide.classList.add("services-description-item-active");
    currentservicesSlide = nextSlide;

};

servicesCounter.addEventListener('click', function(evt) {
    var dot = evt.target.closest('.main-services-link');

    servicesSlider(dot);
});