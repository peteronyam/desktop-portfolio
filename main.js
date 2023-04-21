const menuButton = document.querySelector(".mobile_menu");
const mobileMenu = document.querySelector("#menu_top");
const closeButton = document.querySelector("#close-button");

mobileMenu.style.display = "none";
menuButton.addEventListener("click", openMobileMenu);
closeButton.addEventListener("click", closeMobileMenu);
function openMobileMenu() {
  mobileMenu.style.display = "block";
}
function closeMobileMenu() {
  mobileMenu.style.display = "none";
}

const menuItems = document.querySelectorAll("#menu_top a");

menuItems.forEach(function(item) {
  item.addEventListener("click", function() {
    closeMobileMenu();
    const target = this.getAttribute("href");
    document.querySelector(target).scrollIntoView({
      behavior: "smooth"
    });
  });
});
