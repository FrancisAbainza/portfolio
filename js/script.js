const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
  nav.classList.remove('open-nav')
})

function scrollToSection(area) {
  var targetElement = document.getElementById(area);
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0)
})