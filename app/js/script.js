'use strict';

const body = document.querySelector('body');
const header = document.querySelector('.header');
const hamburgerMenu = document.querySelector('#hamburger');
const mobMenu = document.querySelector('.header__mobMenu');
const mobMenuLinks = document.querySelectorAll('.header__mobItem');

const closeMobileMenu = function () {
  header.classList.remove('open');
  mobMenu.classList.remove('fade-in');
  mobMenu.classList.add('fade-out');
  body.classList.remove('noscrol');
};
const openMobileMenu = function () {
  header.classList.add('open');
  mobMenu.classList.add('fade-in');
  mobMenu.classList.remove('fade-out');
  body.classList.add('noscrol');
};

// open/close mobile menu when click on Hamburger menu
hamburgerMenu.addEventListener('click', function () {
  // if <header> has class '.open'
  header.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
});

// open/close mobile menu when click on link
mobMenuLinks.forEach((link) => {
  link.addEventListener('click', function () {
    header.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
  });
});
