'use strict';


const getBurger = document.querySelector('.icon--burger');
const getMenu = document.querySelector('.page__menu');
const body = document.querySelector('.page__body');
const navLinks = document.querySelectorAll('.nav__link')

const massifButtons = [getBurger, ...navLinks];

function getBurgerActive() {
  for (let i = 0; i < massifButtons.length; i++) {
    massifButtons[i].addEventListener('click', () => {
      getBurger.classList.toggle('icon--active');
      body.classList.toggle('page__body--lock');
      getMenu.classList.toggle('page__menu--active');
    })
  }
}

getBurgerActive();

  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',

      clickable: true,
    },

    grabCursor: true,

    breakpoints: {
      498: {
        slidesPerView: 2.1,
        spaceBetween: 20,
      },

      0: {
        slidesPerView: 1.07,
        spaceBetween: 16,
      }
    }
  });
