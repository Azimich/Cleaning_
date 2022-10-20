
export const initHeader = () => {

  const body = document.querySelector('body');
  const hamburger = document.querySelector('.header__burger');
  const navLinks = document.querySelector('.header__links');
  const navList = document.querySelectorAll('.header__links > li');
  // const navLink = document.querySelectorAll('.header__links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    body.classList.toggle('lock');
    links.forEach(link => link.classList.toggle('fade'));
  });

  navList.forEach((item) => item.addEventListener('click', () => closeMenu()));
  function closeMenu () {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    body.classList.remove('lock');
  }

  // navList.forEach((navLinks) => {
  //   navLinks.addEventListener('click', ()=> {
  //     navLinks.classList.toggle('active')
  //   });
  // });

  navList.forEach(item => item.addEventListener('click', function() {
    if(this.classList.contains('active')) {
      this.classList.remove('active')
    } else {
      accordionTitle.forEach(element => {
        element.classList.remove('active')
      });
      this.classList.add('active')
  }));

  window.addEventListener('scroll', (e) => {
    let header = document.querySelector('header');
    let activeHeader = 'header__scroled';

    pageYOffset > 200 
    ? header.classList.add('header__scroled') 
    : header.classList.remove('header__scroled')
  });
}
  