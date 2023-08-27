const form = document.querySelector('.signup-form');
const email = document.getElementById('email');
const errorIcon = document.querySelector('.error-icon');
const validationMessage = document.querySelector('.validation-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value.toLowerCase());

  validationMessage.textContent = valid ? 'Thank you!' : 'Please enter valid email';
  validationMessage.style.color = valid ? 'hsl(0, 6%, 24%)' : 'hsl(0, 93%, 68%)';
  errorIcon.classList.toggle('visible', !valid);
  email.classList.toggle('error', !valid);

  if (valid) email.value = '';
});
