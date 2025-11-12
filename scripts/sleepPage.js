const randomFactButton = document.getElementById("random-fact-button")

const facts = [
    "This is a random fact",
    "I dont know lmfao",
    "yeah ok bro"
]

randomFactButton.addEventListener('click', function() {
    const randomFact = document.getElementById("random-fact-text")

    const index = Math.floor(Math.random() * facts.length)

    randomFact.textContent = facts[index]
})