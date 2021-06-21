var list = document.getElementById("menu-list");
var menu = document.getElementById("nav");
var ham_x = document.getElementById("ham_x")
var x = window.matchMedia("(min-width: 1024px)")

function phone(x) {
    if (x.matches) { // If media query matches
        list.style.display = "flex"
        ham_x.className = "fa fa-bars menu-icon";
    } else {
        list.style.display = "none";
    }
}
phone(x)
x.addListener(phone)
ham_x.addEventListener("click", function show() {
    if (ham_x.className == "fa fa-bars menu-icon") {
        ham_x.className = "fa fa-times menu-icon";
        list.style.display = "block"
    } else {
        ham_x.className = "fa fa-bars menu-icon";
        list.style.display = "none"
    }
});