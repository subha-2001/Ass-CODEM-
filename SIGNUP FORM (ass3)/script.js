const form = document.querySelector('.form-container form');
const inputs = document.querySelectorAll('.form-container input[type="text"], .form-container input[type="email"], .form-container input[type="password"]');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
        const isValid = input.type === 'email' ? emailRegex.test(input.value.toLowerCase()) : !!input.value;
        input.parentElement.classList.toggle('error', !isValid);
    });
});
