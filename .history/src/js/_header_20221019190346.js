
export const initHeader = () => {

  const body = document.querySelector('body');
  const hamburger = document.querySelector('.header__burger');
  const hambur = document.querySelector('.menu__container');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelector('.header__links');
  const links = document.querySelectorAll('.header__links > li');
  
  if(hamburger) {

  }




  window.addEventListener('scroll', (e) => {
    let header = document.querySelector('header');
    let activeHeader = 'header__scroled';

    pageYOffset > 180 
    ? header.classList.add('header__scroled') 
    : header.classList.remove('header__scroled')
  });

}
  