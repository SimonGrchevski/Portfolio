const list = document.getElementById('menu-list');
const hamX = document.getElementById('ham_x');
const screenSize = window.matchMedia('(min-width: 1024px)');
const menuIcon = document.querySelector('.menu-icon');
const abs = document.querySelectorAll('.abs');
const welcome = document.querySelector('.welcome');
const dropDownShape = document.querySelector('.drop-down-mobile');

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
    dropDownShape.style.display = 'none';
  } else {
    welcome.style.display = 'block';
    list.classList.add('open_menu');
  }
}

function show() {
  if (!screenSize.matches) {
    if (hamX.className === 'fa fa-bars menu-icon') {
      hamX.className = 'fa fa-times menu-icon';
      hamX.style.color = 'grey';
      hamX.style.fontSize = '30px';
      hamX.style.right = '35px';
      list.style.display = 'block';
      menuIcon.style.marginLeft = '45vw';
      welcome.style.display = 'none';
      dropDownShape.style.display = 'block';
      removeBackground(abs);
    } else {
      hamX.className = 'fa fa-bars menu-icon';
      hamX.style.color = 'black';
      hamX.style.right = '40px';
      hamX.style.fontSize = '20px';
      list.style.display = 'none';
      welcome.style.display = 'block';
      addBackground(abs);
      dropDownShape.style.display = 'none';
    }
  }
}

phone(screenSize);
screenSize.addListener(phone);
hamX.addEventListener('click', show);
