const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-btn');
const menuLinks = menu.querySelectorAll('a[href^="#"]');
const mobileMenuOptions = document.querySelectorAll('.header__menu-option');
const moreButton = document.querySelector('.lead__more-btn');
const bikeCategories = document.querySelectorAll('.bikes__category');
const submitButton = document.querySelector('.footer__submit-btn');
const menuList = document.querySelector('.header__menu-options');


// скрывается мобильное меню при переходе по якорной ссылке
for (const link of mobileMenuOptions) {
  link.addEventListener('click', () => {
    menuList.style.display = "none";
  });
}

//плавная прокрутка страницы при переходе по якорной ссылке из меню с учетом высоты fixed элемента
for (const link of menuLinks) {
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
}

// отмена обновления страницы при нажатии на категорию без полной реализации блока
for (const category of bikeCategories) {
  category.addEventListener('click', (event) => {
    event.preventDefault();
  });
}

//появление меню при нажатии на кнопку вызова
menuButton.addEventListener('click', (event) => {
  if (!event.target.classList.contains('header__menu-close')) {
    menuList.style.display = "flex";
  } else {
    menuList.style.display = "none";
  }
});

//изменение кнопки вызова меню
menuButton.addEventListener('click', (event) => {
  event.target.classList.toggle('header__menu-close');
});

// отмена обновления страницы при нажатии на кнопку Подробнее без ссылки
moreButton.addEventListener('click', (event) => {
  event.preventDefault();
});

//появление кнопки отправки формы при активации поля ввода e-mail
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('footer__input-email')) {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
});
