const header = document.querySelector(".header");
const burger = header.querySelector(".burger-menu");
const burgerIcon = header.querySelector(".burger-menu__icon");

burger.addEventListener("click", function() {
  header.classList.toggle("header--mobile");

  if (header.classList.contains("header--mobile")) {
    burgerIcon.src = "images/burger-menu-close.svg"
  } else {
    burgerIcon.src = "images/burger-menu.svg"
  }
})

// Слайдер со стрелками
const sliderArrows = document.querySelector('.slider-arrows'),
      slidesArrows = sliderArrows.querySelectorAll('.slider-arrows__item'),
      prev = sliderArrows.querySelector('.slider-arrows__arrow--left'),
      next = sliderArrows.querySelector('.slider-arrows__arrow--right');

let slideIndex = 0;

prev.addEventListener('click', () => showSlideArrows(-1));
next.addEventListener('click', () => showSlideArrows(1));


function showSlideArrows(n = 0) {
  slideIndex += n;

  if (slideIndex < 0) slideIndex = slidesArrows.length - 1;
  if (slideIndex >= slidesArrows.length) slideIndex = 0;

  slidesArrows.forEach(item => item.style.display = 'none');
  slidesArrows[slideIndex].style.display = 'block';
}

showSlideArrows();

let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.contact__btn'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка дл
openPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('active'); // Добавляем класс 'active' для фона
      popup.classList.add('active'); // И для самого окна
  })
});
closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
  popupBg.classList.remove('active'); // Убираем активный класс с фона
  popup.classList.remove('active'); // И с окна
});
document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
  if(e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('active'); // Убираем активный класс с фона
      popup.classList.remove('active'); // И с окна
  }
});