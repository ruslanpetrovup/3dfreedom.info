const btn = document.getElementById('btn-modal');
const backdrop = document.querySelector('.backdrop')


const modalOpen = () => {
    if (backdrop.classList.contains('backdrop')) {
        backdrop.classList.add('is-active');
        backdrop.addEventListener('click', modalClose)
        return
    }
    
}
const modalClose = (even) => {
    if (even.target.className !== "backdrop is-active") {
        return
    }
    backdrop.removeEventListener('click', modalClose)
    backdrop.classList.remove('is-active');
}
btn.addEventListener('click', modalOpen);