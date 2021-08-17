const btnClose = document.querySelector('.header-menu-close');
const btnOpen = document.querySelector('.header__sprite-burger')

// const hiddenClose = () => {
//   btnOpen.classList.remove('is-hidden')
//   btnClose.classList.add('is-hidden')
// }
// const hiddenOpen = () => {
//   btnClose.classList.remove('is-hidden');
//   btnOpen.classList.add('is-hidden');
// }
(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      closeMenuBtn: document.querySelector("[data-menu-close]"),
      menu: document.querySelector("[data-menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleModal);
    refs.closeMenuBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.menu.classList.toggle("is-open");
    }
})();
btnClose.addEventListener('click', hiddenClose);
btnOpen.addEventListener('click', hiddenOpen);