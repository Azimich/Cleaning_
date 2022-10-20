
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
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 3,

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
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });
}