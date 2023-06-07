'use strict'

const menu = document.querySelector(".menu");
const buttonClose = document.querySelector('.menu_header_close');
const buttonOpen = document.querySelector('.menu_header_open');
const signUpButton = document.querySelector('.sign_up_header');
const mobile = document.querySelector('.mobile');
const imageLogo = document.querySelector('.logo_header');

buttonOpen.addEventListener('click', (() => {
    menu.style.width = "100%";
    menu.style.height = '602px';
    signUpButton.style.display = 'block';
    buttonClose.style.display = 'block';
    buttonOpen.style.display = 'none';
    imageLogo.style.marginBottom = '0';
}))

buttonClose.addEventListener('click', (() => {
    menu.style.width = "0";
    menu.style.height = '0';
    signUpButton.style.display = 'none';
    buttonOpen.style.display = 'block';
    buttonClose.style.display = 'none';
    imageLogo.style.marginBottom = '15px';
}));