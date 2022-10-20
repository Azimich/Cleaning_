
import Swiper, { Navigation, Pagination, EffectCards } from 'swiper';

export const initSwiper = () => {

  // gallery slider
  const swiper2 = new Swiper ('.gallery__slider', {
    modules: [Navigation, Pagination, EffectCards],
    effect: 'cards',
    EffectCards: {
      rotate: true,
      slideShadows: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',

      clickable: true,
      dynamicBullets: true,
    },

    simulateTouch: true,
    loop:true,
  });

  // Слайдер для страницы история завода
  const swiper9 = new Swiper(".about__swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });


  const swiper4 = new Swiper("", {
    modules: [Navigation, Pagination],
    slidesPerView: 2,
    spaceBetween: 3,
    loop: true,
    autoplay: {
      delay: 5000,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 5,
      },
    },
  });
}