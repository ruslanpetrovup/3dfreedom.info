const btnClose = document.querySelector('.header-menu-close');
const btnOpen = document.querySelector('.header__sprite-burger');
const openMenuBtn = document.querySelector("[data-menu-open]");
const closeMenuBtn = document.querySelector("[data-menu-close]");
const menu = document.querySelector("[data-menu]");

const openModalMenu = () => {
  menu.classList.add('is-open')
}
const closeModalMenu = () => {
  menu.classList.remove('is-open')
}
const hiddenClose = () => {
  btnOpen.classList.remove('is-hidden')
  btnClose.classList.add('is-hidden')
  closeModalMenu()
}
const hiddenOpen = () => {
  btnClose.classList.remove('is-hidden');
  btnOpen.classList.add('is-hidden');
  openModalMenu()
}


btnClose.addEventListener('click', hiddenClose);
btnOpen.addEventListener('click', hiddenOpen);