'use strict'

const slidesContainer = document.querySelector('.slides_container');
const slide = document.querySelector('.slide');
const back = document.querySelector('.back');
const forward = document.querySelector('.forward');
const currentSlide = document.querySelector('.current_slide');

const slidesCount = document.querySelectorAll('.slide').length
let currentPosition = 1;

const scrollSlider = (position) => {
    slidesContainer.scrollLeft = slide.clientWidth * (position - 1);
    currentSlide.textContent = currentPosition + '';
}

scrollSlider(currentPosition);

forward.addEventListener("click", () => {
    if (currentPosition === slidesCount) {
        return;
    }

    scrollSlider(++currentPosition);
});

back.addEventListener("click", () => {
    if (currentPosition === 1) {
        return;
    }

    scrollSlider(--currentPosition);
});