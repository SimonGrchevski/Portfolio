const form = document.getElementById('get-in-touch-form');
const nameField = form.elements['name'];
const emailField = form.elements['email'];

function UserData(name='', email=''){
  this.name=name;
  this.email=email;
}

let userData = JSON.parse(localStorage.getItem('user'));
nameField.value = userData.name;
emailField.value = userData.email;

nameField.addEventListener('onchange', function () {
  userData = new UserData(nameField,userData.email);
  updataLocalStorage();
})

emailField.addEventListener('onchange', function(){
  userData = new UserData(userData.name,userData.email);
  updataLocalStorage();
})

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!localStorage.getItem('user')) {
    userData = new UserData(nameField.value, emailField.value)
    updataLocalStorage();
  }
});

function updataLocalStorage(){
  localStorage.setItem('user', JSON.stringify(userData));
}





