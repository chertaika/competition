const menu = document.querySelector('.header__menu'),
      menuButton = document.querySelector('.header__menu-btn'),
      menuLinks = menu.querySelectorAll('a[href^="#"]'),
      mobileMenuOptions = document.querySelectorAll('.header__menu-option'),
      moreButton = document.querySelector('.lead__more-btn'),
      bikeCategories = document.querySelectorAll('.bikes__category'),
      submitButton = document.querySelector('.footer__submit-btn'),
      menuList = document.querySelector('.header__menu-options');

//отображение меню
showMenu = () => {
  menuList.style.display = "flex";
  menuButton.classList.add('header__menu-btn_close');
};

//скрытие меню
hideMenu = () => {
  menuList.style.display = "none";
  menuButton.classList.remove('header__menu-btn_close');
};

// скрывается мобильное меню при переходе по якорной ссылке
for (const link of mobileMenuOptions) {
  link.addEventListener('click', () => {
    hideMenu()
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
  if (event.target.classList.contains('header__menu-btn_close')) {
    hideMenu();
  } else {
    showMenu();
  }
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
