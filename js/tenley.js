const heartButton = document.getElementById("heart-button")
let counter = 1

heartButton.addEventListener('click', function() {
    counter += 1
    heartButton.textContent = `🤍 ${counter}`
})