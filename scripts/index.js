const menuLinks = document.querySelectorAll('.header__menu-option');
const moreButton = document.querySelector('.lead__more-btn');
const menuButton = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__menu');
const bikeCategories = document.querySelectorAll('.bikes__category');
const submitButton = document.querySelector('.footer__submit-btn');

for (const link of menuLinks) {
  link.addEventListener('click', () => {
    menuButton.checked = false;
  });
}

for (const category of bikeCategories) {
  category.addEventListener('click', (event) => {
    event.preventDefault();
  });
}

moreButton.addEventListener('click', (event) => {
  event.preventDefault();
});

menu.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 75;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('footer__input-email')) {
    submitButton.style.display = "block";
  }
  else {
    submitButton.style.display = "none";
  }
});
