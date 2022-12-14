
import { initHeader } from './_header';
import { initSwiper } from './libs/_swiper';
import { initPopup } from './_popup';
import { initForms } from './_forms';
import { initHistory } from './_history';
import { initialVacanceis } from './_vacancies';
import { initFansVran } from './_fansVran';
import { initContacts } from './_contacts';
import { initLeaders } from './_leaders';
import { initNotification } from './_notification';
import { initialPoints } from './_points';


(function () {
  if (typeof NodeList !== 'undefined' && NodeList.prototype && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  try {
    initHeader();
    initAbout();
    initSwiper();
    initNews();
    initSlick();
    initTabssizes();
    initAuthorization();
    initResources();
    initPopup();
    initForms();
    initHistory();
    initialVacanceis();
    initLeaders();
    initFansVran();
    initContacts();
    initNotification();
    initialPoints();

  } catch (err) {
    console.log(err);
  }
  
})();