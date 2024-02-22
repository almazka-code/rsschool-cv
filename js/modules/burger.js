// burger menu

const burger = document.querySelector('.burger');
const menuBurger = document.querySelector('.nav');
const menuLinks = document.querySelectorAll('.nav__link');
const body = document.querySelector('.body');

const toggleMenu = function () {
  burger.classList.toggle('burger--active');
  menuBurger.classList.toggle('nav--active');
  body.classList.toggle('stop-scroll');
}

burger.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menuBurger.classList.remove('nav--active');
    body.classList.remove('stop-scroll');
  });
});

body.addEventListener('click', function (e) {
  const target = e.target;
  const targetBurger = target == burger;
  const targetMenu = target == menuBurger || menuBurger.contains(target);
  const menuIsActive = menuBurger.classList.contains('nav--active');

  if (!targetBurger && !targetMenu && menuIsActive) {
    toggleMenu();
  }
});