const rotator = document.querySelector('.rotator');
const adsArr = document.querySelectorAll('.rotator__case');
let activeAdv = document.querySelector('.rotator__case_active');
activeAdv.style.color = activeAdv.dataset.color;
let rotateInterval = activeAdv.dataset.speed;

function mySetTimeout() {
  setTimeout(rotate, rotateInterval);
};

function rotate() {
  activeAdv = document.querySelector('.rotator__case_active');
  if (activeAdv.nextElementSibling !== null) {
    activeAdv.classList.remove('rotator__case_active');
    activeAdv.nextElementSibling.classList.add('rotator__case_active');
    activeAdv.nextElementSibling.style.color = activeAdv.nextElementSibling.dataset.color;
    rotateInterval = activeAdv.nextElementSibling.dataset.speed;
  } else {
    activeAdv.classList.remove('rotator__case_active');
    rotator.firstElementChild.classList.add('rotator__case_active');
    rotator.firstElementChild.style.color = rotator.firstElementChild.dataset.color;
    rotateInterval = rotator.firstElementChild.dataset.speed;
  }
  mySetTimeout();
};

mySetTimeout();