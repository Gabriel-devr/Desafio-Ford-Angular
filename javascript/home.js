const menuButton = document.querySelector('.menu')
const main = document.querySelector('main')

function mover() {
    const sideBar = document.querySelector('.side-bar');
    sideBar.classList.toggle('side-bar-move');

}

menuButton.addEventListener('click', mover)