const btn = document.querySelector('.masonry');
const backdrop = document.querySelector('.backdrop')
const imgSrc = document.querySelector('.modal-window__img')


const modalOpen = (even) => {
    even.preventDefault()
    if (even.target.nodeName !== "IMG") {
        return
    }
    imgSrc.innerHTML = even.target.parentElement.innerHTML
    backdrop.classList.add('is-active');
    backdrop.addEventListener('click', modalClose)
}
    
const modalClose = (even) => {
    even.preventDefault()
    if (even.target.className !== "backdrop is-active") {
        return
    }
    backdrop.removeEventListener('click', modalClose)
    backdrop.classList.remove('is-active');
}
btn.addEventListener('click', modalOpen);