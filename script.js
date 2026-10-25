
const secretInput = document.querySelector('.secret-input')
const torchIcon = document.querySelector('.torch-icon')
const loginForm = document.querySelector('.login-form')
const usernameInput = document.querySelector('.username-input')

let clickCount = 1
const correctName = "Мудрий Маг"
const correctSpell = "magicSpell"

loginForm.addEventListener("submit", function(e) {
    e.preventDefault()

    if (usernameInput.value === correctName && secretInput.value === correctSpell) {
        alert('Двері відчинено!')
        window.location.href = './treasure.html'
    } else {
        alert('Невірне закликання! Портал заблоковано')
    }
})

torchIcon.addEventListener("click", function() {
    clickCount++

    if (clickCount % 2 === 0) {
        secretInput.setAttribute('type', 'text')
        torchIcon.setAttribute('src', './torch-on.png')
    } else {
        secretInput.setAttribute('type', 'password')
        torchIcon.setAttribute('src', './torch-off.png')
    }
})
