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
  item.addEventListener('click', function (event) {
    event.preventDefault();
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
const fullNameInput = document.querySelector('#full-name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

window.addEventListener('load', () => {
  const fullName = localStorage.getItem('fullName');
  const email = localStorage.getItem('email');
  const message = localStorage.getItem('message');

  if (fullName && email && message) {
    fullNameInput.value = fullName;
    emailInput.value = email;
    messageInput.value = message;
  }
});

form.addEventListener('submit', (event) => {
  const email = emailInput.value.trim();
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const error = document.createElement('p');
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
    }, 1000);
  } else {
    const fullName = fullNameInput.value.trim();
    const message = messageInput.value.trim();

    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    form.reset();
  }
});
