const form = document.getElementById('get-in-touch-form');
const { email } = form.elements;
const msgElem = document.getElementById('msg');
const eSuccess = 0;
const eFailure = 1;
const eventInfo = [
  { cl: 'success', msg: 'You successfully submited the form' },
  { cl: 'fail', msg: 'The email input must be in lower case' },
];

function displayResponse(eInfo) {
  msgElem.className = eInfo.cl;
  msgElem.innerText = eInfo.msg;
}

function validEmail() {
  return (/^[^A-Z]*$/).test(email.value);
}

form.addEventListener('submit', (e) => {
  if (validEmail()) {
    displayResponse(eventInfo[eSuccess]);
  } else {
    displayResponse(eventInfo[eFailure]);
    e.preventDefault();
  }
});
