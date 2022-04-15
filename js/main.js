document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.menu-bars');
  const navMenu = document.querySelector('.nav-menu');

  const mobileMenu = () => {
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  hamburger.addEventListener('click', mobileMenu);

  const navLink = document.querySelectorAll('.nav-item');

  const closeMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }

  navLink.forEach((n) => n.addEventListener('click', closeMenu));

});