const form = document.getElementById('get-in-touch-form');
const nameField = form.elements.name;
const emailField = form.elements.email;
const textField = form.elements.message;
const msgElem = document.getElementById('msg');
let userData = {};
const eSuccess = 0;
const eFailure = 1;
const eventInfo = [
  { cl: 'success', msg: 'You successfully submited the form' },
  { cl: 'fail', msg: 'The email input must be in lower case' },
];

function UserData(name = '', email = '', area = '') {
  this.name = name;
  this.email = email;
  this.area = area;
}

function updataLocalStorage() {
  localStorage.setItem('user', JSON.stringify(userData));
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  userData = JSON.parse(localStorage.getItem('userData'));
  if (userData === null) {
    userData = new UserData(nameField.value, emailField.value, textField.value);
  }
  nameField.value = userData.name;
  emailField.value = userData.email;
  textField.value = userData.area;
}

function displayResponse(eInfo) {
  msgElem.className = eInfo.cl;
  msgElem.innerText = eInfo.msg;
}

function validEmail() {
  return (/^[^a-z]*$/).test(emailField.value);
}

form.addEventListener('onsubmit', (e) => {
  if (validEmail()) {
    displayResponse(eventInfo[eSuccess]);
  } else {
    displayResponse(eventInfo[eFailure]);
    e.preventDefault();
  }
});

[emailField, nameField, textField].forEach((elem) => {
  elem.addEventListener('onchange', () => {
    userData = new UserData(nameField, emailField.value, textField.value);
    updataLocalStorage();
  });
});
