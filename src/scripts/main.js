'use strict';

const header = document.querySelector('.header');
const menu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__button');
const form = document.querySelector('.form');

const closeMenu = () => {
  header.classList.remove('header--menu-open');
  menu.classList.remove('mobile-menu--open');
  menuButton.setAttribute('aria-expanded', 'false');
};

menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('mobile-menu--open');

  header.classList.toggle('header--menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
});
