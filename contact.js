
const errorMsg = document.querySelector('#username-error');

const myForm = document.querySelector('form');
const successful = document.querySelector('#success-message');
const formText = document.getElementById('form-text');



myForm.addEventListener('submit', function(e){
    e.preventDefault();

    // Get all inputs

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    let isValid = true;

    formText.classList.add('d-none');

    successful.classList.add('d-none');

    // Validation checks

    if (username.value.trim() === ''){
        isValid = false;
    };

    if (email.value.trim() === ''|| !email.value.includes('@')){
        isValid = false;
    };

    if (subject.value.trim() === ''){
        isValid = false;
    };

    if (message.value.trim().length < 10){
        formText.classList.remove('d-none');
        isValid = false;
    };

    if (isValid){
        successful.classList.remove('d-none');
        successful.focus();
    }
    else {
        successful.classList.add('d-none');
        successful.focus();
    };

    // successful.classList.toggle('d-none', !isValid);
    
    // if (isValid) {
    //     successful.focus();
    // }

    



});