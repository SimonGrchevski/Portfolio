const form = document.getElementById('get-in-touch-form');
const nameField = form.elements['name'];
const emailField = form.elements['email'];

function UserData(name, email){
  this.name=name;
  this.email=email;
}

let userData = JSON.parse(localStorage.getItem('user'))

  console.log(JSON.parse(localStorage.getItem('user')));
  nameField.value = userData.name;
  emailField.value = userData.email;


form.addEventListener('submit', function (e) {

  if (!localStorage.getItem('user')) {
    userData = new UserData(nameField.value, emailField.value)
    localStorage.setItem('user', JSON.stringify(userData));
  }
  e.preventDefault();
});






