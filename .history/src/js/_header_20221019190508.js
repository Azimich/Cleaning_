
export const initHeader = () => {

  const body = document.querySelector('body');
  const hamburger = document.querySelector('.header__burger');
  const hambur = document.querySelector('.menu__container');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelector('.header__links');
  const links = document.querySelectorAll('.header__links > li');
  
  if(hamburger, window) {
    links.forEach((item) => item.addEventListener('click', () => closeMenu()));
    function closeMenu () {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      hambur.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('lock');
    }  

    
  }






}
  