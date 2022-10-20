
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
  
  navSlide ();


  const pushIcon = document.querySelector('.push-icons');
  const pushBlock = document.querySelector('.header__push-container');
  const userIcon = document.querySelector('.user-icon');
  const userBlock = document.querySelector('.header__profile-container');
  
  if(pushIcon, pushBlock, userBlock) {
    pushIcon.addEventListener('click', () => {
      pushBlock.classList.toggle('active')
      userBlock.classList.remove('active')
    });
  }

  if(userIcon, userBlock, pushBlock) {
    userIcon.addEventListener('click', () => {
      userBlock.classList.toggle('active')
      pushBlock.classList.remove('active')
    });
  }
}