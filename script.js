const list = document.getElementById('menu-list');
const hamX = document.getElementById('ham_x');
const screenSize = window.matchMedia('(min-width: 1024px)');
const menuIcon = document.querySelector('.menu-icon');
const abs = document.querySelectorAll('.abs');
const welcome = document.querySelector('.welcome');

function removeBackground(abs) {
  Array.from(abs).forEach((element) => {
    element.style.display = 'none';
  });
}

function addBackground(abs) {
  Array.from(abs).forEach((element) => {
    element.style.position = 'absolute';
    element.style.display = 'block';
  });
}

function phone(screenSize) {
  if (screenSize.matches) {
    list.style.display = 'flex';
    hamX.className = 'fa fa-bars menu-icon';
    hamX.style.color = 'black';
    list.classList.remove('open_menu');
    addBackground(abs);
    welcome.style.display = 'none';
  } else {
    welcome.style.display = 'block';
    list.style.display = 'none';
    list.classList.add('open_menu');
  }
}

function show() {
  if (hamX.className === 'fa fa-bars menu-icon') {
    hamX.className = 'fa fa-times menu-icon';
    hamX.style.color = 'grey';
    list.style.display = 'block';
    menuIcon.style.marginLeft = '45vw';
    welcome.style.display = 'none';
    // remove background
    removeBackground(abs);
  } else {
    hamX.className = 'fa fa-bars menu-icon';
    hamX.style.color = 'black';
    list.style.display = 'none';
    welcome.style.display = 'block';
    addBackground(abs);
  }
}

phone(screenSize);
screenSize.addListener(phone);
hamX.addEventListener('click', show);
