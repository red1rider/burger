const burgerBtn = document.getElementById('burgerBtn');
const navlinks = document.getElementById('nav-links');

burgerBtn.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});