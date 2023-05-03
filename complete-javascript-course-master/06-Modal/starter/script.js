'use strict';

const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
console.log(showModal);
const closeModal = document.querySelector('.close-modal');
console.log(closeModal);
const overlay = document.querySelector('.overlay');
console.log(overlay);
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closing = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModal);
  closeModal.addEventListener('click', closing);
  overlay.addEventListener('click', closing);
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 27) {
    closing();
  }
});
