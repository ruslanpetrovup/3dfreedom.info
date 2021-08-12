const btn = document.getElementById('btn-modal');
const backdrop = document.querySelector('.backdrop')


const modalOpen = () => {
    if (backdrop.classList.contains('backdrop')) {
        backdrop.classList.add('is-active');
        return
    }
    
}
const modalClose = (even) => {
    if (even.target.className !== "backdrop is-active") {
        return
    }
    backdrop.classList.remove('is-active');
}
backdrop.addEventListener('click', modalClose)
const buttonmodal = btn.addEventListener('click', modalOpen);