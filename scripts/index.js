const menu = document.querySelector('.header__menu'),
      menuButton = document.querySelector('.header__menu-btn'),
      menuLinks = menu.querySelectorAll('a[href^="#"]'),
      mobileMenuOptions = document.querySelectorAll('.header__menu-option'),
      submitButton = document.querySelector('.footer__submit-btn'),
      menuList = document.querySelector('.header__menu-options'),
      inputEmail = document.querySelector('.footer__input-email'),
      filters = document.querySelectorAll('.bikes__filter'),
      bikesCards = document.querySelector('.bikes__cards'),
      categorySelector = document.querySelector('.bikes__category-selector');
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
  filter.addEventListener('click', (event) => {
    let currentButton = event.target;

    if(currentButton.classList.contains('bikes__filter_active')) {
      return false;
    }

    let activeButton = document.querySelector('.bikes__filter_active');
    activeButton.classList.remove('bikes__filter_active');
    currentButton.classList.add('bikes__filter_active');

    let selectedFilter = filter.getAttribute('data-filter');
    showCats(selectedFilter);
  });
}

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

//отображение только велосипедов выбранной категории
showCats = (selectedFilter) => {
  let itemsToHide = bikesCards.querySelectorAll('.bikes__slide_active');
  let itemsToShow = bikesCards.querySelectorAll(`[data-filter="${selectedFilter}"]`);

  for(const item of itemsToHide) {
    item.classList.remove('bikes__slide_active');
  }

  for(const item of itemsToShow) {
    item.classList.add('bikes__slide_active');
  }
}

//отображение и скрытие меню кнопкой
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

//переключение категорий велосипедов в мобильной версии
categorySelector.addEventListener('change', function (event) {
  showCats(event.target.value);
})