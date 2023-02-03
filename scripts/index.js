const menu = document.querySelector('.header__menu'),
      menuButton = document.querySelector('.header__menu-btn'),
      menuLinks = menu.querySelectorAll('a[href^="#"]'),
      mobileMenuOptions = document.querySelectorAll('.header__menu-option'),
      submitButton = document.querySelector('.footer__submit-btn'),
      menuList = document.querySelector('.header__menu-options'),
      inputEmail = document.querySelector('.footer__input-email'),
      filters = document.querySelectorAll('.bikes__filter'),
      bikesCategories = document.querySelector('.bikes__categories');
const roadsSlider = new Swiper(".highway__swiper", {
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 40,
  navigation: {
    nextEl: ".highway__btn_right",
    prevEl: ".highway__btn_left"
  }
});
const bikesSlider = new Swiper(".bikes__swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      spaceBetween: 0,
    },
  }
});

// скрывается мобильное меню при переходе по якорной ссылке
for (const link of mobileMenuOptions) {
  link.addEventListener('click', () => {
    hideMenu()
  });
}

showMenu = () => {
  menuList.style.display = "flex";
  menuButton.classList.add('header__menu-btn_close');
};

hideMenu = () => {
  menuList.style.display = "none";
  menuButton.classList.remove('header__menu-btn_close');
};

//плавная прокрутка страницы по якорю с учетом высоты fixed элемента
for (const link of menuLinks) {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = menu.getBoundingClientRect().bottom;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
}

//переключение категорий велосипедов
for(const filter of filters) {
  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.bikes__cards .bikes__slide:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.bikes__cards [data-filter='${selectedFilter}']`);

    itemsToHide.forEach(element => {
      element.classList.remove('bikes__slide_active');
    });

    itemsToShow.forEach(element => {
      element.classList.add('bikes__slide_active');
    });

  });
}

menuButton.addEventListener('click', (event) => {
  if (event.target.classList.contains('header__menu-btn_close')) {
    hideMenu();
  } else {
    showMenu();
  }
});

//появление кнопки отправки формы при заполнении поля ввода e-mail
inputEmail.addEventListener('input', () => {
  if (inputEmail.value !== "") {
    submitButton.style.display = "block";
  } else {
    submitButton.style.display = "none";
  }
});


bikesCategories.addEventListener('click', function({ target: t }) {
  if (this !== t) {
    [...this.children].forEach(n => n.classList.toggle('bikes__filter_active', n === t));
  }
});

