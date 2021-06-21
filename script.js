const list = document.getElementById('menu-list');
const hamX = document.getElementById('ham_x');
const screenSize = window.matchMedia('(min-width: 1024px)');

function phone(screenSize) {
  if (screenSize.matches) { // If media query matches
    list.style.display = 'flex';
    hamX.className = 'fa fa-bars menu-icon';
    list.classList.remove('open_menu');
  } else {
    list.style.display = 'none';
    list.classList.add('open_menu');
  }
}
phone(screenSize);
screenSize.addListener(phone);
hamX.addEventListener('click', show);

function show()
{
  if (hamX.className === 'fa fa-bars menu-icon') {
    hamX.className = 'fa fa-times menu-icon';
    list.style.display = 'block';
  } else {
    hamX.className = 'fa fa-bars menu-icon';
    list.style.display = 'none';
  }
}
