const eyeOff = document.querySelector(".final-icon")

function eyeOn() {
    eyeOff.value='*'
}

eyeOff.addEventListener('click', eyeOn)