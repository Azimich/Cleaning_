
import { initHeader } from './_header';
import { initSwiper } from './libs/_swiper';
// import { initPopup } from './_popup';
// import { initForms } from './_forms';
import { initMap } from './_map';


(function () {
  if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  try {
    initHeader();
    initSwiper();
    initMap()
    // initPopup();
    // initForms();

  } catch (err) {
    console.log(err);
  }

})();