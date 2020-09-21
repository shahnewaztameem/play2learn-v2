let loginForm = document.querySelector('.login-form');
let registerForm = document.querySelector('.register-form');
let registerBtn = document.querySelector('.registerBtn');
let loginBtn = document.querySelector('.loginBtn');

registerBtn.addEventListener('click', function () {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block'
})

loginBtn.addEventListener('click', function () {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none'
})

