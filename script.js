let list = document.getElementById('menu-list');
let hamX = document.getElementById('ham_x');
let x = window.matchMedia('(min-width: 1024px)');

function phone(x) {
    if (x.matches) { // If media query matches
        list.style.display = 'flex';
        hamX.className = 'fa fa-bars menu-icon';
    } else {
        list.style.display = 'none';
    }
}
phone(x);
x.addListener(phone);
hamX.addEventListener('click', function show() {
    if (hamX.className === 'fa fa-bars menu-icon') {
        hamX.className = 'fa fa-times menu-icon';
        list.style.display = 'block';
    } else {
        hamX.className = 'fa fa-bars menu-icon';
        list.style.display = 'none';
    }
});