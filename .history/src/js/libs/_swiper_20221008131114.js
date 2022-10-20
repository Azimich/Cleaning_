
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

export const initSwiper = () => {
  const swiperAbout = new Swiper(".about__swiper", {
    modules: [Pagination, Autoplay],
    watchSlidesProgress: true,
    slidesPerView: 1,
    loop:true,
    a

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
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