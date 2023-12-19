// Toggle password visibility
const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.textContent = type === 'password' ? 'visibility' : 'visibility_off';
});

// Date input with calendar icon
const dateInput = document.getElementById('dateInput');
const toggleCalendar = document.getElementById('toggleCalendar');

toggleCalendar.addEventListener('click', () => {
  dateInput.focus();
});

dateInput.addEventListener('focus', () => {
  dateInput.type = 'date';
});

dateInput.addEventListener('blur', () => {
  dateInput.type = 'text';
});

