
import Swiper, { Navigation, Pagination, EffectCards } from 'swiper';

export const initSwiper = () => {

  // // gallery slider
  // const swiper2 = new Swiper ('.gallery__slider', {
  //   modules: [Navigation, Pagination, EffectCards],
  //   effect: 'cards',
  //   EffectCards: {
  //     rotate: true,
  //     slideShadows: false,
  //   },

  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },

  //   pagination: {
  //     el: '.swiper-pagination',

  //     clickable: true,
  //     dynamicBullets: true,
  //   },

  //   simulateTouch: true,
  //   loop:true,
  // });

  const swiper9 = new Swiper(".about__swiper", {
    modules: [Navigation, Pagination],
    // watchSlidesProgress: true,
    // slidesPerView: 4,
    // spaceBetween: 35,
    

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}