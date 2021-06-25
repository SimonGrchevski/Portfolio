const form = document.getElementById('get-in-touch-form');
const nameField = form.elements['name'];
const emailField = form.elements['email'];
let userData = {};

if (localStorage.getItem('user')) {
  console.log(JSON.parse(localStorage.getItem('user')));
  userData = JSON.parse(localStorage.getItem['user']);
  nameField.value = userData.name;
  emailField.value = userData.email;
}





