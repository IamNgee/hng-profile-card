
const myForm = document.querySelector('form');
const successful = document.querySelector('#success-message');

myForm.addEventListener('submit', function(e){
    e.preventDefault();

    // access inputs
    const bio = document.getElementById('bio');
    const goals = document.getElementById('goals');
    const confident = document.getElementById('low');
    const notes = document.getElementById('notes');


    let isValid = true;

    if (bio.value.trim() === '') isValid = false;
    if (goals.value.trim() === '') isValid = false;
    if (confident.value.trim() === '') isValid = false;
    if (notes.value.trim() === '') isValid = false;

    successful.classList.add('d-none');

    if (isValid){
        successful.classList.remove('d-none');
        successful.focus();
    }
    else {
        successful.classList.add('d-none');
        successful.focus();
    };
})