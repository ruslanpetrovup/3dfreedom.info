const btn = document.querySelector('.masonry');
const backdrop = document.querySelector('.backdrop');
const imgSrc = document.querySelector('.modal-window__img');
const bodyEl = document.querySelector('body');

const modalOpen = (even) => {
    even.preventDefault()
    console.log(bodyEl)
    if (even.target.nodeName !== "IMG") {
        return
    }
    bodyEl.setAttribute("style", "overflow: hidden");
    imgSrc.setAttribute('src', even.target.parentElement.children[0].attributes[0].value);
    backdrop.classList.add('is-active');
    backdrop.addEventListener('click', modalClose)
}
    
const modalClose = (even) => {
    even.preventDefault()
    if (even.target.className !== "backdrop is-active") {
        return
    }
    bodyEl.setAttribute("style", "");
     imgSrc.setAttribute('src', '');
    backdrop.removeEventListener('click', modalClose)
    backdrop.classList.remove('is-active');
}
btn.addEventListener('click', modalOpen);