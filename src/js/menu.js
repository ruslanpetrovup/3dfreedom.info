const btnClose = document.querySelector('.header-menu-close');
const btnOpen = document.querySelector('.header__sprite-burger');
const openMenuBtn = document.querySelector("[data-menu-open]");
const closeMenuBtn = document.querySelector("[data-menu-close]");
const menu = document.querySelector("[data-menu]");
const bodyEl = document.querySelector("body");

const openModalMenu = () => {
  bodyEl.setAttribute("style", "overflow: hidden");
  menu.classList.add('is-open')
}
const closeModalMenu = () => {
  bodyEl.setAttribute("style", "");
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