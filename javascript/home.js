const menuButton = document.querySelector('.menu')
const main = document.querySelector('main')

function mover() {
    const sideBar = document.querySelector('.side-bar');
    sideBar.classList.toggle('side-bar-move');
    main.classList.toggle('main-corrigido')

}

menuButton.addEventListener('click', mover)