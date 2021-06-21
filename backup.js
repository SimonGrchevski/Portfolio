const list = document.getElementById('menu-list');
const hamX = document.getElementById('ham_x');
const screenSize = window.matchMedia('(min-width: 1024px)');
const menu_icon = document.querySelector(".menu-icon");
const abs = document.querySelector(".abs");

function phone(screenSize) {
    if (screenSize.matches) { // If media query matches list.style.display = 'flex'; hamX.className = 'fa fa-bars menu-icon'; hamX.style.color= "black"; list.classList.remove('open_menu'); } else { list.style.display = 'none'; list.classList.add('open_menu'); } } phone(screenSize); screenSize.addListener(phone); hamX.addEventListener('click', show); function show() { if (hamX.className === 'fa fa-bars menu-icon') { hamX.className = 'fa fa-times menu-icon'; hamX.style.color= "grey"; list.style.display = 'block'; menu_icon.style.marginLeft = '45vw'; abs.style.display="none" } else { hamX.className = 'fa fa-bars menu-icon'; hamX.style.color= "black"; list.style.display = 'none'; abs.style.display="absolute"; } }