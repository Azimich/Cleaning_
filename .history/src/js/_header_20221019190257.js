
export const initHeader = () => {

  const body = document.querySelector('body');
  const hamburger = document.querySelector('.header__burger');
  const hambur = document.querySelector('.menu__container');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelector('.header__links');
  const links = document.querySelectorAll('.header__links > li');
  
  if()

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hambur.classList.toggle('active');
    overlay.classList.toggle('active');
    navLinks.classList.toggle('open');
    body.classList.toggle('lock');
    links.forEach(link => {
      link.classList.toggle('fade')
    })
  });

  links.forEach((item) => item.addEventListener('click', () => closeMenu()));
  function closeMenu () {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    hambur.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('lock');
  }
  
  window.addEventListener('scroll', (e) => {
    let header = document.querySelector('header');
    let activeHeader = 'header__scroled';

    pageYOffset > 180 
    ? header.classList.add('header__scroled') 
    : header.classList.remove('header__scroled')
  });

}
  