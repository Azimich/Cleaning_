
export const initHeader = () => {

  const body = document.querySelector('body');
  const hamburger = document.querySelector('.header__burger');
  const navLinks = document.querySelector('.header__links');
  const links = document.querySelectorAll('.header__links > li');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    body.classList.toggle('lock');
    links.forEach(link => link.classList.toggle('fade'))
  });

  links.forEach((item) => item.addEventListener('click', () => closeMenu()));
  function closeMenu () {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
    body.classList.remove('lock');
  }

  window.addEventListener('scroll', (e) => {
    let header = document.querySelector('header');
    let activeHeader = 'header__scroled';

    if (pageYOffset > 400) {
      header.classList.add
    }
  });


  // window.addEventListener("scroll", () => {
  //   const currentScroll = window.pageYOffset;
  //   if (currentScroll <= 0) {
  //     body.classList.remove('scrollUp');
  //     return;
  //   }
  
  //   let lastScroll = 0;
  //   const defaultOffset = 0;
  //   const header = document.querySelector('.header');

  //   const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
  //   const containHide = () => header.classList.contains('hide');

  //   window.addEventListener('scroll', () => {
  //     if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
  //       //scroll down
  //       header.classList.add('hide');
  //     }
  //     else if(scrollPosition() < lastScroll && containHide()){
  //       //scroll up
  //       header.classList.remove('hide');
  //     }
  //     lastScroll = scrollPosition();
  //   })
  // })
}
  