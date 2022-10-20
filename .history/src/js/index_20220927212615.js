
// import { initHeader } from './_header';
// import { initSwiper } from './libs/_swiper';
// import { initPopup } from './_popup';
// import { initForms } from './_forms';


(function () {
  if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  try {
    initHeader();
    // initSwiper();
    // initPopup();
    // initForms();

  } catch (err) {
    console.log(err);
  }

})();