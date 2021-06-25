let form = document.getElementById('get-in-touch-form');
const email = form.elements['email'];
const err = 'Email content must be lower case';
const msg_elem = document.getElementById('msg');
const eSuccess = 0;
const eFailure = 1;
const eventInfo = [
    { cl: 'success', msg: 'You successfully submited the form' },
    { cl: 'fail', msg: 'The email input must be lower case' }
];
form.addEventListener('submit', (e) => {

    if (validEmail()) {
        displayResponse(eventInfo[eSuccess])
        e.preventDefault();
    }

    else {
        displayResponse(eventInfo[eFailure])
        e.preventDefault();
    }
})
