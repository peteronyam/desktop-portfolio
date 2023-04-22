const menuButton = document.querySelector('.mobile_menu');
const mobileMenu = document.querySelector('#menu_top');
const closeButton = document.querySelector('#close-button');

function openMobileMenu() {
  mobileMenu.style.display = 'block';
}
function closeMobileMenu() {
  mobileMenu.style.display = 'none';
}
mobileMenu.style.display = 'none';
menuButton.addEventListener('click', openMobileMenu);
closeButton.addEventListener('click', closeMobileMenu);

const menuItems = document.querySelectorAll('#menu_top a');

menuItems.forEach((item) => {
  item.addEventListener('click', function () {
    closeMobileMenu();
    const target = this.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.pageYOffset > 100) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
});

const form = document.querySelector('form');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    let error = document.createElement('p');
    error.textContent = 'Please enter your email in lower case.';
    error.style.color = '#f55800';
    error.style.textAlign = 'center';
    error.style.fontSize = '32px';
    error.style.fontFamily = 'Inter';
    error.style.marginTop = '80px';
    error.style.marginLeft = '20px';
    error.style.fontWeight = 'bold';
    error.style.width = '400px';
    form.appendChild(error);
    setTimeout(() => {
      error.remove();
      error = null;
    }, 1000);
  }
});

const form = document.querySelector('form');
let fullNameInput = document.querySelector('#full-name');
let emailInput = document.querySelector('#email');
let messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let fullName = fullNameInput.value;
  let email = emailInput.value;
  let message = messageInput.value;

  localStorage.setItem('fullName', fullName);
  localStorage.setItem('email', email);
  localStorage.setItem('message', message);

  form.reset();
});