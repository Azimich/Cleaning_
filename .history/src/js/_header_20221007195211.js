
export const initHeader = () => {

  const hamburger = document.querySelector('.header__burger');
  const navLinks = document.querySelector('.header__links');
  const links = document.querySelectorAll('.header__links > li');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navLinks.classList.toggle('open');
    links.forEach(link => {
      link.classList.toggle('fade')
    })
  });
 
}
  