const formSubmitButton = document.getElementById('btn-submit');
const formEmailInput = document.getElementById('email');
const errorIcon = document.getElementById('error-icon');
const errorText = document.getElementById('error-text');



formSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (formEmailInput.value === "" || !formEmailInput.value.includes("@") || !formEmailInput.value.includes(".")) {
        errorIcon.classList.add('active-error-icon');
        errorText.classList.add('active-error-text');
    } else {
        errorIcon.classList.remove('active-error-icon');
        errorText.classList.remove('active-error-text');
        
    }
})


