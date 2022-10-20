
export const initHeader = () => {

  const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade')
  })
});
  }
  
}