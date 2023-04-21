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
    const error = document.createElement('p');
    error.textContent = 'Please enter your email in lower case.';
    error.style.color = 'red';
    form.appendChild(error);
  }
});