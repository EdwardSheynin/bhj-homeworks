const fontSizeArr = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fontSizeArr.forEach((element) => element.addEventListener('click', (event) => {
  fontSizeArr.forEach((element) => element.classList.remove('font-size_active'));
  event.target.classList.add('font-size_active');

  const {size} = event.target.dataset;
  book.classList.remove('book_fs-big', 'book_fs-small');
  book.classList.add('book_fs-' + size);

  event.preventDefault();
}));

const colorArr = Array.from(document.getElementsByClassName('color'));
const fontControl = colorArr.filter((element) => element.closest('.book__control_color'));
const backgroundControl = colorArr.filter((element) => element.closest('.book__control_background'));

fontControl.forEach((element) => element.addEventListener('click', (event) => {
  fontControl.forEach((element) => element.classList.remove('color_active'));
  event.target.classList.add('color_active');

  const {textColor} = event.target.dataset;
  book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');
  book.classList.add('book_color-' + textColor);

  event.preventDefault();
}));

backgroundControl.forEach((element) => element.addEventListener('click', (event) => {
  backgroundControl.forEach((element) => element.classList.remove('color_active'));
  event.target.classList.add('color_active');

  const {bgColor} = event.target.dataset;
  book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');
  book.classList.add('book_bg-' + bgColor);

  event.preventDefault();
}));