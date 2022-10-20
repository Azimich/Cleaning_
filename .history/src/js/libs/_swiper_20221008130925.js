
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
    watchSlidesProgress: true,
    slidesPerView: 1,
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      '@1.00': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '@1.50': {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  });
}